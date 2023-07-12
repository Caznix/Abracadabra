import { Client } from "revolt.js";
import dotenv from 'dotenv';
dotenv.config();


let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
    console.log(`Id is ${client.sessions}! `)
);



client.loginBot(process.env.token);