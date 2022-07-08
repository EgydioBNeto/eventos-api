import express from "express";
import usuarioController from "../controllers/usuarioController.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

router

  .get("/usuario", usuarioController.listarUsuario)
  .post("/auth", usuarioController.autenticarUsuario)
  .get("/validarToken", authMiddlewares, usuarioController.validarToken)
  .post("/usuario", usuarioController.novoUsuario)
  .get("/usuario/:id", usuarioController.listarUsuarioID)
  .put("/usuario/:id", usuarioController.atualizarUsuarioID)
  .delete("/usuario/:id", usuarioController.excluirUsuarioID)
  .post("/esqueciSenha", usuarioController.esqueciSenha)
  .post("/resetSenha", usuarioController.resetSenha);


export default router;
