import express from "express";
import eventoController from "../controllers/eventoController.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

//router.use(authMiddlewares);

router

  .get("/evento", eventoController.listarEvento)
  .post("/evento", eventoController.novoEvento)
  .post("/listarEventoPeriodo", eventoController.listarEventoPeriodo)
  .get("/evento/:id", eventoController.listarEventoID)
  .get("/eventoData/:data", eventoController.listarEventoData)
  .get("/listarEventosPassados", eventoController.listarEventosPassados)
  .get("/listarEventosFuturos", eventoController.listarEventosFuturos)
  .get("/listarEventosHoje", eventoController.listarEventosHoje)
  .put("/evento/:id", eventoController.atualizarEventoID)
  .delete("/evento/:id", eventoController.excluirEventoID);

export default router;
