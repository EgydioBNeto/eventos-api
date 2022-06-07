import mongoose from "mongoose";
import multer from "multer";
import path from "path";
const appUrl = path.resolve("src", "temp", "uploads");

const fotoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "evento",
    required: true,
  } /**EVENTO**/,
  foto: { type: String },
  url: { type: String },
  banner: { type: Boolean, default: false },
});

fotoSchema.pre("save", function () {
  if (!this.url) {
    this.url = `${appUrl}/${this.foto}`;
  }
});
  
const foto = mongoose.model("fotos", fotoSchema);

export default foto;
