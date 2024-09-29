import { MongoClient } from "mongodb";

const uri = "mongodb+srv://test:test@map.h3rqdk9.mongodb.net/";

const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export { client, connectToMongo };
