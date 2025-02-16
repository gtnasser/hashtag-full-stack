// JavaScript Assincrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://<db_username>:<db_password>@clusterfreeaws.18kfo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFreeAws"

const client = new MongoClient(URI)

export const db = client.db('spotifyClone')

//const artistCollection = await client.db('spotifyClone').collection('artists').find({}).toArray();
//console.log('artistCollection', artistCollection)

//const songCollection = await client.db('spotifyClone').collection("songs").find({}).toArray();
//console.log('songCollection', songCollection)
