import express from "express";
import crypto from "crypto";
import bodyParser from "body-parser";
const port = 4000;
const app = express();

const posts = {};
app.use(bodyParser.json());

app.post("/posts", (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  const { content } = req?.body;
  const post = { id, content };
  posts[id] = post;
  res.status(200).send(posts);
});

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
