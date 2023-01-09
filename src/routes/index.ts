import express from "express";
import { EmpresaController } from "../controllers/empresa";

const routes = express.Router();
// const empresaController = new EmpresaController();

routes.get("/ibge", EmpresaController.searchEmpresa);

export { routes };
