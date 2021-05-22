import express from "express";
import dotenv from "dotenv";
import colors from "colors";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
      .brightBlue.bgBrightWhite.bold
  )
);
