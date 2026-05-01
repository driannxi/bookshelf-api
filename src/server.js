import express from "express";

const app = express();
const port = 9000;
const host = "localhost";

app.listen(port, () => {
  console.log(`server running at http://${host}:${port}`)
})