require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const postsRoute = require("./routes/posts");

const app = express();

/* ------------------------------- Middleware ------------------------------- */
app.use(cors());
app.use(bodyParser.json());

/* --------------------------------- Routes --------------------------------- */
app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/posts", postsRoute);

/* ------------------------------ Connect To DB ----------------------------- */
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to the database!");
  }
);

app.listen(3000);
