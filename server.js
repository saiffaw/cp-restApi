import Express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import router from "./router.js";
dotenv.config();
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(` server run on port ${port}`);
});
