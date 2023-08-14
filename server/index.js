import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
import connectDB from "./Database/connect.js";

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello Dall-E");
});

const runServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Running on port:8080"));
  } catch (error) {
    console.log(error);
  }
};

runServer();
