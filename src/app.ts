import express, { json } from "express";

const app = express();
app.use(json());

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to port " + port));
