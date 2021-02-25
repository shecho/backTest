
import express, { json } from "express";
import path from "path";
import morgan from "morgan";
// import routes from 'Routes'

// const routes = require("../routes/index");

const config = (app) => {

  // Configuration
  app.set("port", process.env.PORT || 8000);
  app.use(json());
  app.use(morgan("dev"));
  // Static files

  // Routes from /routes index
//   routes(app);
  return app;

  // Error router
};
export default config;