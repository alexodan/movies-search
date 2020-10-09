import express from "express";
import { fetchPopularMovies } from "../api";

const router = express.Router();

router.get("/movies/popular", async (req, res) => {
  const { page } = req.query;
  const data = await fetchPopularMovies(page);
  res.json(data);
});

export default router;
