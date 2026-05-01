import express from "express";
import { addBook } from "./controller.js";

const router = express.Router();

router.post("/", addBook);

export default router;
