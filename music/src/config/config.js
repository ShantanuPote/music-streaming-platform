import {config as dotenvConfig} from "dotenv";

dotenvConfig();

const _config = {
    MONGO_URI: process.env.MONGO_URI,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    JWT_SECRET: process.env.JWT_SECRET
}
console.log("MONGO_URI:", process.env.MONGO_URI);

export default _config;
