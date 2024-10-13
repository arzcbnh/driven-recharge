import express, { json } from "express";
import { DocumentRoute, phonesRoute } from "#routes";
import { handleError } from "#middleware";

const app = express();
app.use(json());

app.use(phonesRoute);
app.use(DocumentRoute);
app.use(handleError);

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to port " + port));
