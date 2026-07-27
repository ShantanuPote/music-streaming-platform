import config from "../config/config.js"
import amqp from "amqplib"

let channel, connection;

export async function connect(){

    connection = await amqp.connect(config.RABBIT_URL);
    channel = await connection.createChannel();
    console.log("Connected to Rabbit MQ")
}

export async function publishToQueue(queueName,data ){
    await channel.assertQueue(queueName, {durable: true});
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    console.log("message send to queue",queueName)
}