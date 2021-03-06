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
  .get("/fotosEvento/:id", fotoController.listarFotoIDEvento)
  .get("/fotosEventoBanner/:id", fotoController.listarFotoIDEventoBanner)
  .delete("/foto/:id", fotoController.excluirFotoID)
  .post("/foto", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: nome, foto, location: url = "" } = req.file;
    const { evento, banner } = req.body;

    const fotocad = await Foto.create({
      url,
      nome,
      evento,
      foto,
      banner,
    });
    return res.json({ message: `Foto ${fotocad.id} cadastrada com sucesso!` });
  });

export default router;
