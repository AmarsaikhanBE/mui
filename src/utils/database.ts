import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://eamaraa3:ooF7m4Nt7CgaH2FM@cluster0.m2yzzpr.mongodb.net/"
);
const clientPromise = client.connect();

const mongodb = async (table: string) => {
  const client = await clientPromise;
  const db = client.db("mui");
  const collection = db.collection(table);
  return collection;
};

export default mongodb;
