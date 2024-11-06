import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({ msg: "hello, world!" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
