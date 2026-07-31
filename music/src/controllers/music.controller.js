import {uploadFile} from "../services/imagekit.js";
import musicModel from "../models/music.model.js";

export async function uploadMusic(req, res){
    const musicFile = req.files['music'][0];
    const coverImageFile = req.files['coverImage'][0];

    try{
        if(!musicFile || !coverImageFile){
            return res.status(400).json({
                message: "Music file and cover image are required."
            });
        }
        // Upload music
        const uploadedMusic = await uploadFile(
            musicFile.buffer,
            musicFile.originalname,
            "/songs"
        );

        // Upload cover image
        const uploadedCover = await uploadFile(
            coverImageFile.buffer,
            coverImageFile.originalname,
            "/covers"
        );

        console.log("Body:", req.body);
console.log("User:", req.user);
console.log("Files:", req.files);
console.log("Uploaded Music:", uploadedMusic);
console.log("Uploaded Cover:", uploadedCover);

        // Save in MongoDB
        const music = await musicModel.create({
            title: req.body.title,
            artist: req.user.firstName + " " + req.user.lastName,
            artistId: req.user._id,
            musicUrl: uploadedMusic.url,
            coverImageUrl: uploadedCover.url
        });

        return res.status(201).json({
            message: "Music uploaded successfully",
            music
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}