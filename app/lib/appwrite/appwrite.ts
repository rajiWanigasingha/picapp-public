import { Client, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(`${process.env.NEXT_PUBLIC_URL}`)
    .setProject(`${process.env.NEXT_PUBLIC_ID}`);

export const storage = new Storage(client);

export const database = new Databases(client)

