import express from "express";
import books from "./books";
import { nanoid } from "nanoid";

export const addBook = (req, res, next) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading, //bolean
  } = req.body;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  if (pageCount === readPage) {
    const finished = true;
  } else {
    const finished = false;
  }

  const newBooks = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    insertedAt,
    updatedAt,
    finished,
  };
  books.push(newBooks);
  const isSuccess = books.filter((book) => book.id === id).length > 0;
  

  if (isSuccess) {
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: { bookId: id },
    });
  }

  if (!nama) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }


};
