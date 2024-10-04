import express, { Request, Response } from "express";
import { single, multiple } from "./middlewares/upload.middleware";

const PORT = 3000;

function init() {
  const app = express();

  app.post("/upload/single", single, (req: Request, res: Response) => {
    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
    });
  });

  // Rute untuk upload file lebih dari satu
  app.post("/upload/multiple", multiple, (req: Request, res: Response) => {
    res.status(200).json({
      message: "Files uploaded successfully",
      files: req.files,
    });
  });

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
