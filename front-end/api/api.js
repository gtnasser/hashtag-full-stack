//import 'dotenv/config'
//const { NODE_ENV } = process.env
//const URL = NODE_ENV === 'development' ? "http://127.0.0.1:3001/api" : '/api'
import axios from "axios"

const URL = '/api'

const responseArtists = await axios.get(`${URL}/artists`)
export const artistArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`)
export const songsArray = responseSongs.data;

