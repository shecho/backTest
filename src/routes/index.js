import { Router } from "express";

const router = Router();


module.exports = (app) => {
    app.get("/testing", (req, res) => {
        res.json({
          message: "hola frontend en react",
        });
      });

      app.use(router);
}