import sendEmail from "../utils/email.js";
import { subscribeToQueue } from "./rabbit.js";

function startListener(){
    subscribeToQueue("user_created", async (msg) => {
        const email = msg.email;
        const role = msg.role ?? "user";
        const name = msg.fullname ?? msg.fullName ?? {};
        const firstName = name.firstName ?? "there";
        const lastName = name.lastName ?? "";

        if (!email) {
            console.warn("Skipping user_created message without email", msg);
            return;
        }

        const template = `
        <h1>Welcome to spotify </h1>
        <p>Dear ${firstName} ${lastName} </p>
        <p>Thank you for registering with Spotify Piper. We are excited to have you onboard</p>
        <p>Your role is :${role}</p>
        <p>we hope you enjoy our services. </p>
        `


        await sendEmail(email, 'welcome to spotify ','Thank you for registering with Spotify Piper', template)
    })
}

export default startListener;