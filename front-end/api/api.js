import axios from "axios"

const URL = "http://127.0.0.1:3001"

const responseArtists = await axios.get(`${URL}/artists`)
export const artistArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`)
export const songsArray = responseSongs.data;

