import { Schema, model } from "mongoose";
const carSchema = new Schema(
  {
    marca: String,
    fabrication_time: Number,
    date: Date,
  },
  {
    timestamps: true,
  }
);
export default model("Car", carSchema);
