import express from "express";
const port = 4000;
const app = express();
const posts = {};

app.get("/", (req,res) => {
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
