import express, { Request, Response } from "express";
import path from "path"; // Import path module

const PORT = 3000;

const categories = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Perabotan" },
];

const products = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Meja", category: "Perabotan" },
];

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

  // Route untuk mendapatkan semua kategori
  app.get("/categories", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch all categories",
      data: categories,
    });
  });

  // Route untuk mendapatkan detail kategori berdasarkan ID
  app.get("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((cat) => cat.id === categoryId);

    if (category) {
      res.status(200).json({
        message: "Success fetch category detail",
        data: category,
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null,
      });
    }
  });

  // Route untuk menambahkan kategori baru
  app.post("/categories", (req: Request, res: Response) => {
    const newCategory = req.body;
    newCategory.id = categories.length + 1; // Assign new ID
    categories.push(newCategory);

    res.status(201).json({
      message: "Category added successfully",
      data: newCategory,
    });
  });

  // Route untuk memperbarui kategori berdasarkan ID
  app.put("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex((cat) => cat.id === categoryId);

    if (index !== -1) {
      categories[index].name = req.body.name;
      res.status(200).json({
        message: "Category updated successfully",
        data: categories[index],
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null,
      });
    }
  });

  // Route untuk menghapus kategori berdasarkan ID
  app.delete("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex((cat) => cat.id === categoryId);

    if (index !== -1) {
      categories.splice(index, 1);
      res.status(200).json({
        message: "Category deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null,
      });
    }
  });

  // Route untuk mencari produk berdasarkan nama
  app.get("/products/search", (req: Request, res: Response) => {
    const { name } = req.query;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes((name as string).toLowerCase())
    );

    res.status(200).json({
      message: "Success fetch products",
      data: filteredProducts,
    });
  });

  // Route untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
  app.get(
    "/categories/:categoryId/products/search",
    (req: Request, res: Response) => {
      const categoryId = parseInt(req.params.categoryId);
      const { name } = req.query;
      const category = categories.find((cat) => cat.id === categoryId);

      if (category) {
        const filteredProducts = products.filter(
          (product) =>
            product.category === category.name &&
            product.name.toLowerCase().includes((name as string).toLowerCase())
        );

        res.status(200).json({
          message: "Success fetch products in category",
          data: filteredProducts,
        });
      } else {
        res.status(404).json({
          message: "Category not found",
          data: null,
        });
      }
    }
  );

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
