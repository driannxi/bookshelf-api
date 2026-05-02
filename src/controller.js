import express from "express";
import books from "./books.js";
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
    reading = false,
  } = req.body;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }
  const isMoreFinished = readPage > pageCount ? true : false;
  if (isMoreFinished) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  if (finished) {
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan...",
      data: { bookId: id },
    });
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
  //   const isFinished = pageCount === readPage ? !finished : finished;

  if (isSuccess) {
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: { bookId: id },
    });
  }
  return res.status(500).json({
    status: "fail",
    message: "Buku gagal ditambahkan",
  });
};
