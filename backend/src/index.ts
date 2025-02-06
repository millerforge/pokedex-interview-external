import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const backendPort = 3000;
const frontendPort = 5173;
const backendUrl = `http://localhost:${backendPort}`;
const frontendUrl = `http://localhost:${frontendPort}`;

const app = express();

const SECRET = "c2804b11-3ad4-4a3a-a63c-8502aa1a9633";

app.use(cors({ origin: [frontendUrl] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(backendPort, () => {
  console.log(`Pokédex backend running on port ${backendPort}`);
});
