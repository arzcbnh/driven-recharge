import express, { json } from "express";
import { phonesRoute } from "#routes";

const app = express();
app.use(json());

app.use(phonesRoute);

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to port " + port));
