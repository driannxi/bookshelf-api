import express from "express";
import { addBook, getBook, getDetailBook } from "./controller.js";

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getBook);
router.get("/books/{bookId}", getDetailBook);

export default router;
