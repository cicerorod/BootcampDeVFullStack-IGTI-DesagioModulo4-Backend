import express from "express";
import controller from "../controllers/gradeController.js";

const app = express();

app.post("/grade/", controller.create);
app.get("/grade/", controller.findAll);
app.get("/grade/:id", controller.findOne);
app.put("/grade/:id", controller.update);
app.delete("/grade/:id", controller.remove);
app.delete("/grade/", controller.removeAll);
app.get("/getAll/", controller.getAll);
app.get("/getAll2/", controller.getAll2);
app.get("/getAll2/", controller.getAll3);

export { app as gradeRouter };
