import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  } /**USUARIO**/,
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventos",
    required: true,
  } /**EVENTO**/,
  palavraChave: { type: String, required: true },
});

const checkin = mongoose.model("checkins", checkinSchema);

export default checkin;
