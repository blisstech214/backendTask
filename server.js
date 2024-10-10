const express = require("express");
const dotenv = require("dotenv");
const database = require("./database/database");
const cors = require("cors");
const router = require("./router/routes");

dotenv.config();
const app = express();
database();

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"], 
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", router);

const port = 8080;
app.listen(port, () => {
  console.log(`Server connected on port ${port}`);
});
