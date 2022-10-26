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

module.exports = {
  getMovies: (req, res) => {
    res.send({
      status: "success",
      data: movies,
    });
  },
  getDetailMovies: (req, res) => {
    const params = req.params;
    const data = movies.find((item) => item.id == params.id);
    res.send({
      status: "success",
      data,
    });
  },
  postMovies: (req, res) => {
    const data = req.body;
    movies.push(data);
    res.status(201);
    res.send({
      status: "success",
      message: "success add data",
    });
  },
};
