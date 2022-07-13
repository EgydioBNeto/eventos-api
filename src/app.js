import dotenv from "dotenv";
import path from "path";
import express from "express";
import morgan from "morgan";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
const __dirname = path.resolve();

dotenv.config();

db.on(
  "error",
  console.log.bind(console, "Erro ao conectar no Banco de Dados:")
);
db.once("open", () => {
  console.log("Conexão com o Banco de Dados estabelecida com sucesso!");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "src", "temp", "uploads"))
);  

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

export default app;
