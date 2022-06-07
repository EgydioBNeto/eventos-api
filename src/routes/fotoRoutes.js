import express from "express";
import fotoController from "../controllers/fotoController.js";
import multer from "multer";
import multerConfig from "../config/multer.js";
import Foto from "../models/Foto.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

//router.use(authMiddlewares);

router

  .get("/foto", fotoController.listarFoto)
  .get("/foto/:id", fotoController.listarFotoID)
  .delete("/foto/:id", fotoController.excluirFotoID)
  .post("/foto", multer(multerConfig).single("file"), async (req, res) => {
    const { nome, banner, foto } = req.file;

    const { evento } = req.body;

    const fotocad = await Foto.create({
      nome,
      evento,
      foto,
      banner,
    });
    return res.json({ message: `Foto ${fotocad.id} cadastrada com sucesso!` });
  });

export default router;
