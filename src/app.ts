import express from "express";
import studentRoute from "./routes/studentRoute";

const app = express();

app.use(express.json());
app.use(studentRoute);

export default app;
