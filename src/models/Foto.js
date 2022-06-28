import mongoose from "mongoose";


const fotoSchema = new mongoose.Schema({
  nome: { type: String },
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventos",
    required: true,
  } /**EVENTO**/,
  foto: { type: String },
  url: { type: String },
  banner: { type: Boolean, default: false },
});

const foto = mongoose.model("fotos", fotoSchema);

export default foto;
