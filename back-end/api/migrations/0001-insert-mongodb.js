import { artistArray } from "./artists.js";
import { songsArray } from "./songs.js";
import { db } from "../connect.js";

// mongodb tem o seu proprio identificador (_id), vamos remover o nosso (id)

// se precisar transformar os dados originais

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
//  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
//  delete newSongObj.id;
  return newSongObj;
});

// console.log(newArtistArray);
// console.log(newSongsArray);

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

//console.log(responseSongs);
//console.log(responseArtists);
