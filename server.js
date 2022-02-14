import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Data from "./data.js";

const app = express();

const port = process.env.PORT || 8000
const url =
  "mongodb+srv://istdh:0315@cluster0.5fy7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("mongodb connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use(cors());
app.use(express.json());

app.post("/api/istdh", async (req, res) => {
  try {
    const { name, phone, email, majors } = req.body;
    const newData = new Data({ name, phone, email, majors });
    await newData.save();
    res.status(200).json(newData);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log("server running on port", port);
});
