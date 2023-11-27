const express = require("express");

const app = express();

const port = 5002;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/", (req, res) => {
  res.send(`Welcome to my favourite movie list`);
});

app.get("/api/movies", (req, res) => {
  res.status(200).send(movies);
});
app.get("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  movie ? res.status(200).json(movie) : res.status(404).send("Not Found");
});

/* const express = require("express");
const app = express();
const port = 5002;
const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};
app.get("/users/:name", welcomeName);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
 */
