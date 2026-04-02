import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js"
import recordRouter from "./routes/recordRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";



const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/records", recordRouter);
app.use("/api/dashboard", dashboardRoutes);



//test
app.get("/", (req, res)=>{
    res.send("API is running...");
});     

export default app;