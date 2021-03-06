import express from "express";
import bodyParser from "body-parser";
import movieRouter from "./routes/movie";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(movieRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
