import express from "express";
import cors from "cors";
import axios from "axios";
import { createClient } from "redis";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const DEFAULT_EXPIRATION = 3600;
const redisClient = createClient();
(async () => {
  await redisClient.connect();
})();


app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  const photos = await getOrSetCache(`photos?albumId:${albumId}`, async () => {
    console.log("Cache Miss");

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`,
      {
        params: { albumId },
      }
    );
    return data;
  });
  res.json(photos);
});

app.get("/photos/:id", async (req, res) => {
  const id = req.params.id;
  const photo = await getOrSetCache(`photo:${id}`, async () => {
    console.log("Cache Miss");
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
    return data;
  });
  res.json(photo);
});

async function getOrSetCache(key, cb) {
 try {
     const data = await redisClient.get(key);
     if (data) {
        console.log('Cache Hit')
       return JSON.parse(data);
     }
     const freshData = await cb();
     redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
     return freshData;
 } catch (error) {
    console.log("Error while getting or setting cache", error);
 }
}

const port = 4000;

app.listen(port, () => {
  console.log(`Listening to server on port : ${port}`);
});
