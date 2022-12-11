const express = require("express");
const app = express();
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const swaggerJSON = require("./swagger.json");
dotenv.config();
const port = process.env.PORT;

app.get("/payment", (req, res) => {
  res.send("Welcome to Payment Endpoint!");
});

app.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSON, {
    explorer: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
