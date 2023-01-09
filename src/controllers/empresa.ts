import { Request, Response } from "express";

class EmpresaController {
  static async searchEmpresa(req: Request, res: Response) {
    console.log("/home");
    res.render("/home");
  }
}

export { EmpresaController };
