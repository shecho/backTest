import { Router } from "express";
import Home from '../controllers/homeController';
import Car from '../controllers/carController';
const router = Router();


module.exports = (app) => {
    app.get("/", Home.wellcome);

    // Car Routes
    app.get("/car",Car.list);
    app.post("/car",Car.create);
    app.put("/car",Car.update);
    app.delete("/car",Car.delete);
    // Schdeule Routes
    app.use(router);
}