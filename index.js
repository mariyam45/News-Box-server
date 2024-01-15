// import express from "express";
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("news box running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("listen news");
});
