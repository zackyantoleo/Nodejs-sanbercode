import express, { Request, Response } from "express";
import path from "path"; // Import path module

const PORT = 3000;

function init() {
  const app = express();

  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Route baru untuk /hello
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  // Route baru untuk /user
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

  app.get("/category", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Suscess fetch category",
      data: [
        { id: 1, name: "Elektronik" },
        { id: 2, name: "Perabotan" },
      ],
    });
  });

  app.get("/category/:id", (req: Request, res: Response) => {});

  // app.get("/category/:id", (req: Request, res: Response) => {
  //   const categoryId = req.params.id;
  //   const categoryDetail = {
  //     id: 1,
  //     name: "Elektronik",
  //     description: "Kategori ini berisi produk-produk elektronik seperti smartphone, laptop, dan lain-lain.",
  //   };

  //   if (categoryId === "1") {
  //     res.status(200).json({
  //       message: "Success fetch category detail",
  //       data: categoryDetail,
  //     });
  //   } else {
  //     res.status(404).json({
  //       message: "Category not found",
  //       data: null,
  //     });
  //   }
  // });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
