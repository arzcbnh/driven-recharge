import express, { json } from "express";
import { PhoneRoute, RechargeRoute } from "#routes";
import { handleError } from "#middleware";

const app = express();
app.use(json());

app.use(PhoneRoute);
app.use(RechargeRoute);
app.use(handleError);

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to port " + port));
