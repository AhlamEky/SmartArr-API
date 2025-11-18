import express from "express";

const app = express();
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.json({ message: "SmartArr Cloud API is running" });
});

// Lancer le serveur
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
