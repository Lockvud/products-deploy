import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);

app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://rishisaxena:Ri5hi51x5n1@cluster0.cj5ofof.mongodb.net/?

// mongodb+srv://greatstack:33858627@cluster0.fm5j3k6.mongodb.net/?
// mongodb+srv://greatstack:12345678nN112@cluster0.fm5j3k6.mongodb.net/?


// retryWrites=true&w=majority&appName=Cluster0