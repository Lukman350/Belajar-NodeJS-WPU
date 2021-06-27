const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Lukman Nul Hakim",
      email: "nulhakiml725@gmail.com",
    },
    {
      nama: "Risqi Saputra",
      email: "risqisaputra@gmail.com",
    },
    {
      nama: "Ismayanti",
      email: "ismaynti@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Lukman Nul Hakim",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About", layout: "layouts/main-layout" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Halaman Contact", layout: "layouts/main-layout" });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
