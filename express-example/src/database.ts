import { MongoClient } from "mongodb";

const uri = "mongodb+srv://root:1234567890@todolist.ltcfmpf.mongodb.net/";

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
