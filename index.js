// import express from "express";
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("news box running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  // res.send(categories);
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);

    res.send(categoryNews);
  }
  console.log(id);
});

app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(id);
  // res.send(news);
});

app.listen(port, () => {
  console.log("listen news");
});
