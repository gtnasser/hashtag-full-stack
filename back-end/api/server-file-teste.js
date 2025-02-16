import axios from "axios"

const URL = "http://127.0.0.1:3001"

const responseArtists = await axios.get(`${URL}/artists`)
console.log(responseArtists);

const responseSongs = await axios.get(`${URL}/songs`)
console.log(responseSongs.data)
