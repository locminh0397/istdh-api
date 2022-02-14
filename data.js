import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    majors: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);
export default Data;
