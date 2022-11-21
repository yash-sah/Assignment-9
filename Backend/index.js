import express from "express";
import router from "./routes";
import dbConnect from "./utils/mongodb";
import cors from "cors";
require("dotenv").config();

dbConnect();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors("*"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use("/user", router);

app.listen(PORT, () => {
  console.log("Server listening on ", PORT);
});
