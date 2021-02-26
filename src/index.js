import express from "express";
import config from "./server/config";

// const config = require("./server/config");

const app = config(express());
app.listen(app.get(`port`), () => {
  console.log(`Connected on port: http://localhost:${app.get("port")}/`);
});
