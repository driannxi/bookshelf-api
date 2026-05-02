import express from "express";
import routes from "./routes.js";

const app = express();
const port = 9000;
const host = "localhost";

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`server running at http://${host}:${port}`);
});
