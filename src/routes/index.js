import { Router } from "express";
import Home from '../controllers/homeController';
const router = Router();


module.exports = (app) => {
    app.get("/", Home.wellcome);

      app.use(router);
}