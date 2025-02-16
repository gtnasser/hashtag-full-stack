// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware

import express from "express";
import cors from "cors";

import { artistArray } from "./migrations/artists.js"
import { songsArray } from "./migrations/songs.js"
const app = express();
const PORT = 3002;

app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
response.send(artistArray)
});

app.get("/songs", async (request, response) => {
response.send(songsArray)
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
