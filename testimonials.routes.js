const express = require("express");
const cors = require("cors");
const db = require("./db");
const router = express.Router();
const uuid = require('uuid');

router.route("/testimonials").get((req, res, next) => {
  res.json(db);
});

router.route("/testimonials/:id").get((req, res, next) => {
  const id = req.params.id;
  let result;
  if (id === "random") {
    let index = Math.floor(Math.random() * db.length);
    result = db[index];
  } else {
    result = db.filter((elem) => {
      return elem.id == id;
    });
  }
  res.json(result);
});

router.route("/testimonials").post((req, res, next) => {
  randomId = uuid.v4();
  db.push({
    id: randomId,
    author: req.body.author,
    text: req.body.text,
  });
  res.json({ message: "OK" });
});

router.route("/testimonials/:id").put((req, res, next) => {
  const id = req.params.id;
  db.map((elem) => {
    if (elem.id == id) {
      elem.author = req.body.author;
      elem.text = req.body.text;
    }
    return elem;
  });
  res.json({ message: "OK" });
});

router.route("/testimonials/:id").delete((req, res, next) => {
  const id = req.params.id;
  const testimonial = db.filter((elem) => elem.id == id);
  const index = db.indexOf(testimonial[0]);
  db.splice(index, 1);
  res.json({ message: "OK" });
});

module.exports = router;
