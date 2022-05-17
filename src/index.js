const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.listen(5454, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
