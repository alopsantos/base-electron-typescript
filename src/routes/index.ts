import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ oi: "ola mundo" });
});

export { routes };
