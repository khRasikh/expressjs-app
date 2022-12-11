const express = require("express");
const app = express();
const dotenv = require('dotenv'); 
dotenv.config(); 

const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/payment", (req, res) => {
  res.send("Welcome to Payment Endpoint!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
