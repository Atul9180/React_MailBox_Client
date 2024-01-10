import express from "express";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Load env variables
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
connectDB();

//header security and optimization middlewares
app.use(helmet()); // Adds security headers
app.use(compression()); // Compresses HTTP responses

// Body parsing middlewares
app.use(express.json()); //if not passed returns undefined for req.body
app.use(express.urlencoded({ extended: true })); //to send form data

// cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);

// Custom Error Handler
app.use(notFound); //Handle Not Found (404)
app.use(errorHandler);

//production deployment client path update:
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// API running message
app.get("/", (req, res) => res.send("API is running..."));

app.listen(port, () => console.log(`Server running on ${port}`));

// import path from 'path'
// import express, { urlencoded, json } from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const port = process.env.PORT || 5000;
// import userRoutes from "./routes/userRoutes.js";
// import connectDB from "./config/db.js";
// import cookieParser from "cookie-parser";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// connectDB();
// const app = express();

// //middlewares:
// app.use(json()); //if not passed returns undefined for req.body
// app.use(urlencoded({ extended: true })); //to send form data
// app.use(cookieParser());

// // Routes
// app.use("/api/users", userRoutes);

// if (process.env.NODE_ENV === "production") {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

// app.use(notFound);
// app.use(errorHandler);

// app.get("/", (req, res) => res.send("Api running"));

// app.listen(port, () => console.log(`Server running on ${port}`));
