import {config as dotenvConfig} from "dotenv";

dotenvConfig();

const _config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    RABBIT_URL: process.env.RABBIT_URL
}

export default _config;