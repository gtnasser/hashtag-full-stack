import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://spotify:S1p2o3t4@clusterfreeaws.18kfo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFreeAws"

const client = new MongoClient(URI);

async function main() {

  // connect to server
  await client.connect();
  console.log('Connected successfully to server');

  // confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  // set database
  const db = client.db('spotifyClone');

  const artistCollection = await client.db('spotifyClone').collection('artists').find({}).toArray();
  console.log('artistCollection', artistCollection)

  const songCollection = await client.db('spotifyClone').collection("songs").find({}).toArray();
  console.log('songCollection', songCollection)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
