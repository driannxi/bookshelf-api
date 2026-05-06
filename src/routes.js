import express from "express";
import {
  addBook,
  getBook,
  getDetailBook,
  updateBook,
  deleteBook,
} from "./controller.js";

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getBook);
router.get("/books/:id", getDetailBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
