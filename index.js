const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("ultimate survival courses are here");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`ultimate survival server is running on port, ${port}`);
});
