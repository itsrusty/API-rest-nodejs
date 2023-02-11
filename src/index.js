import { PORT } from "./config.js";
import express from "express";
import employeesRoutes from "./routes/employees.routes.js"
import employeesRoutesIndex from "./routes/index.routes.js";

// app express
const app = express();
app.use(express.json())

// import routes middlewares
app.use("/api",employeesRoutes)
app.use(employeesRoutesIndex)

// config server
app.listen(PORT)