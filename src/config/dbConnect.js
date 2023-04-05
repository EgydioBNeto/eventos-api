import mongoose from "mongoose";
/**SUBISTITUIR PARA VARIAVEL DE AMBIENTE**/
mongoose.connect(
  `mongodb+srv://egydio:egydio@cluster0.nc6uo.mongodb.net/?retryWrites=true&w=majority`
);

let db = mongoose.connection;

export default db;
