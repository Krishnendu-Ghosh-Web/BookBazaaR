import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";

import UserRoute from "./route/user.route.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // your React frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// conecting mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(" connected to mongoDB");
} catch (error) {
  console.log(error);
}
// defining routes
app.use("/book", bookRoute);
app.use("/user", UserRoute);
app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`);
});
