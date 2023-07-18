import { MongoClient } from "mongodb";

//api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sg9891841549:sg9891841549@cluster0.ruko7zo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(body);

    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
