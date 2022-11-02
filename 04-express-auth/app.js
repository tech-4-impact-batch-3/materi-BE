const express = require("express");
const app = express();
const allRouter = require("./routes");

const PORT = 3000;

app.use(allRouter);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
