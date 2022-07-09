import mongoose from "mongoose";
/**SUBISTITUIR PARA VARIAVEL DE AMBIENTE**/
mongoose.connect(`mongodb://admin:admin@18.231.37.81:27017/admin`);

let db = mongoose.connection;

export default db;
