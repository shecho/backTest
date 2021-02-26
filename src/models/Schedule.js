import { Schema, model } from "mongoose";
const scheduleSchema = new Schema(
  {
    title: String,
    date: Date,
    carList:[]
  },
  {
    timestamps: true,
  }
);
export default model("Schedule", scheduleSchema);
