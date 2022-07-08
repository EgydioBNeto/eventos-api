import express from "express";
import checkinController from "../controllers/checkinController.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

//router.use(authMiddlewares);

router

  .get("/checkin", checkinController.listarCheckin)
  .get("/checkin/:id", checkinController.contadorCheckinEventoID)
  .get("/checkinsEventoID/:id", checkinController.listarCheckinsEventoID)
  .get("/checkinsUsuarioID/:id", checkinController.listarCheckinsUsuarioID)
  .post("/checkinEfetuado", checkinController.checkinEfetuado)
  .post("/checkin", checkinController.novoCheckin);


export default router;
