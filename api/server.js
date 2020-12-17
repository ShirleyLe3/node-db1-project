const express = require("express");
const server = express();

const db = require("../data/dbConfig.js");
const router = require("./accounts-router");

server.use(express.json());
server.use("/accounts", router);

router.get("/", async (req, res, next) => {
  try {
    res.json({
      message: "Welcome",
    });
  } catch (err) {
    next(err);
  }
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
