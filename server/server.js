import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from "cors"

import userRoutes from './route/user.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes)

app.get("/", (req, res) => res.send("server is running"))
app.all("*",(req,res)=>res.send("Route does not exist!"))


app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`));




