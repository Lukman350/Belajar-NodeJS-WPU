const fs = require("fs");

// FS

// Menuliskan file secara synchronous
// fs.writeFileSync("tes.txt", "Hello World secara synchronous!");

// Menuliskan file secara asynchronous
// fs.writeFile("tes.txt", "Hello World secara asynchronous!", (err) => {
//   if (err) throw err;

//   console.log("File has been saved!");
// });

// Membaca isi file synchronous
// const isi = fs.readFileSync("tes.txt", "utf-8");
// console.log(isi);

// Membaca isi file asynchronous
// fs.readFile("tes.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan No HP Anda: ", (noHP) => {
    const data = { nama, noHP };
    const contact = fs.readFileSync("data/contacts.json", "utf-8");
    const json = JSON.parse(contact);

    json.push(data);

    fs.writeFileSync("data/contacts.json", JSON.stringify(json));
    console.log(`Data berhasil ditambahkan!`);
    rl.close();
  });
});
