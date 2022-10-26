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
  // get all movies
  getMovies: (req, res) => {
    res.send({
      status: "success",
      data: movies,
    });
  },
  // get movie by id
  getMovieByID: (req, res) => {
    const params = req.params;
    const data = movies.find((item) => item.id == params.id);
    res.send({
      status: "success",
      data,
    });
  },
  // add movie
  addMovie: (req, res) => {
    const data = req.body;
    movies.push(data);
    res.status(201);
    res.send({
      status: "success",
      message: "success add data",
      data: movies,
    });
  },
};
