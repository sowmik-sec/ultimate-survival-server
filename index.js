const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const kits = require("./data/kit.json");

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
app.get("/kits", (req, res) => {
  res.send(kits);
});
app.get("/kits/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const kit = kits.find((kit) => kit.id === id);
  res.send(kit);
});

app.listen(port, () => {
  console.log(`ultimate survival server is running on port, ${port}`);
});
