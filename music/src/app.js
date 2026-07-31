import express from "express"
import cookieParser from "cookie-parser";
import musicRoutes from "./routes/music.routes.js"

const app = express();
app.use(cookieParser());
app.use("/api/music", musicRoutes)

export default app;