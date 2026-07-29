import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config.js"
import { token } from "morgan";
import { publishToQueue } from "../broker/rabbit.js";

export async function register(req, res) {
    try{
        const {email, fullName:{firstName, lastName}, password, role} = req.body;

        const isUserAlreadyExists = await userModel.findOne({email});

        if(isUserAlreadyExists){
            return res.status(400).json({message :"User already exists"});
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            email,
            password: hash,
            fullName: {
                firstName, 
                lastName
            }
        })

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            role:user.role
        }, config.JWT_SECRET, {expiresIn: "2d"})

        await publishToQueue("user_created",{
            id: user._id,
            email: user.email,
            role:user.role,
            fullName: user.fullName,
            fullname: user.fullName
        })

        res.cookie("token", token)

        res.status(201).json({
            message:"user created successfully",
            user:{
                id: user._id,
                email: user.email,
                role:user.role,
                fullname: user.fullname
            }
        })

    }catch(err){
        console.log("error in register Controller", err)
    }
}

export async function login(req, res){
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({message: "Invalid email or password"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid password"});
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role, 
    },config.JWT_SECRET,{expiresIn: '2d'})

    res.cookie("token", token)

    res.status(200).json({
        message:"user logged in successfully",
        user:{
            id: user._id,
            email: user.email,
            fullName: user.fullName,
            role: user.role
        }
    })
}


export async function googleAuthentication(req, res) {
    const user = req.user

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {email: user.emails[0].value},
            {googleId: user.id}
        ]
    })

    if(isUserAlreadyExist){
        const token = jwt.sign({
            id: isUserAlreadyExist._id,
            role: isUserAlreadyExist.role
        },config.JWT_SECRET,{expiresIn: "2d"})

        res.cookie("token",token)

    return res.redirect('http://localhost:5173')
    }

    const newUser = await userModel.create({
        googleId: user.id,
        email: user.emails[0].value,
        fullName: {
                firstName: user.name.givenName, 
                lastName: user.name.familyName
    }})

    const token = jwt.sign({
        id:newUser._id,
        role:newUser.role
    },config.JWT_SECRET,{expiresIn: "2d"})

    await publishToQueue("user_created",{
            id: newUser._id,
            email: newUser.email,
            role:newUser.role,
            fullName: newUser.fullName,
            fullname: newUser.fullName
        })

    res.cookie("token",token)

    res.redirect('http://localhost:5173')
    
}