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
app.all("*", (req, res) => res.send("Route does not exist!"))
app.use(express.static('client/build'));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

app.listen(port, () => console.log(`Server is running`));




