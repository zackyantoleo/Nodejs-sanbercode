import express, { Request, Response } from "express";
import path from "path"; // Untuk mengatur path ke direktori public

const PORT = 3000;

function init() {
  const app = express();

  // Middleware untuk serve file statis dari direktori "public"
  app.use(express.static(path.join(process.cwd(), "public"))); // {{ edit_1 }}

  // Route untuk root "/"
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Route untuk "/hello"
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  // Route untuk "/user"
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@mail.com",
      },
    });
  });

  // Menjalankan server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
