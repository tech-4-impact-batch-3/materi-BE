const express = require("express");
const app = express();
const router = require("./routes");

const PORT = 7000;

app.use(express.json());
app.use(router);

app.listen(PORT);
