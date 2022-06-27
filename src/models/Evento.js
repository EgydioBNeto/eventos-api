import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  descricao: { type: String, required: true },
  palavraChave: { type: String, required: true },
  categoria: { type: String, required: true },
  statusEvento: { type: Boolean, default: true },
  local: { type: String, required: true },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  } /**USUARIO e DOCENTE**/,
});

const evento = mongoose.model("eventos", eventoSchema);

export default evento;
