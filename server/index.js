const express = require("express");
const app = express();
const port = 3000;
const getRoutes = require("./routes");

app.use(express.json());

app.use("/api", getRoutes());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
