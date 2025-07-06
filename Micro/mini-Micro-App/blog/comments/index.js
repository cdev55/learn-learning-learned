import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(cors());
const commentsByPostId={};
app.get("/post/:id/comments",(req,res)=>{
res.status(201).send(commentsByPostId[req.params.id] || []);
})

app.post("/post/:id/comments",(req,res)=>{
  const commentId = crypto.randomUUID();
  // const commentId = crypto.randomBytes(16).toString("hex");
  const {content}=req.body;
  const comments=commentsByPostId[req.params.id] || [];
  comments.push({id:commentId,content});
  commentsByPostId[req.params.id]=comments;
  res.status(201).send(comments);
})


app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
