import ImageKit from "imagekit"
import config from "../config/config.js"

const imageKit = new ImageKit({
    publicKey: config.IMAGEKIT_PUBLIC_KEY,
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT
})

export const uploadFile = async(file , fileName, folder) =>{
    return await imageKit.upload({
        file,
        fileName,
        folder
    });
}

