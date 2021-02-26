import { Schema, model } from "mongoose";
const carSchema = new Schema(
  {
    marca: String,
    fabrication_time: Number,
    date: String,
  },
  {
    timestamps: true,
  }
);
export default model("Car", carSchema);
