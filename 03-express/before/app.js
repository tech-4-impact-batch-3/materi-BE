const express = require("express");
const app = express();

const PORT = 7000;

// middleware
// req -> server
// req -> logger -> server
const logger = (req, res, next) => {
  console.log("Hello, welcome");
  next();
};

const checkUser = (req, res, next) => {
  console.log("user punya token");
  next();
};

app.use(express.json());
app.use(logger);

const movies = [
  {
    id: 1,
    title: "Wakanda",
  },
  {
    id: 2,
    title: "Minion",
  },
];

app.get("/movies", checkUser, (req, res) => {
  console.log("moviess");
  res.send(movies);
});

app.post("/movies", (req, res) => {
  const data = req.body;
  movies.push(data);
  res.status(201);
  res.send({
    status: "success",
    message: "success add data",
  });
});

app.listen(PORT);
