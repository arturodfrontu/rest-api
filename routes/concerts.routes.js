const express = require("express");
const db = require("../db");
const uuid = require('uuid');
const router = express.Router();

router.route("/concerts").get((req, res, next) => {
  res.json(db.concerts);
});

router.route("/concerts/:id").get((req, res, next) => {
  const id = req.params.id;
  let result;
  if (id === "random") {
    let index = Math.floor(Math.random() * db.concerts.length);
    result = db.concerts[index];
  } else {
    result = db.concerts.filter((elem) => {
      return elem.id == id;
    });
  }
  res.json(result);
});

router.route("/concerts").post((req, res, next) => {
  randomId = uuid.v4();
  db.concerts.push({
    id: randomId,
    performer: req.body.performer,
    genre: req.body.genre,
    price: req.body.price,
    day: req.body.day,
    image: req.body.image,
  });
  res.json({ message: "OK" });
});

router.route("/concerts/:id").put((req, res, next) => {
  const id = req.params.id;
  db.concerts.map((elem) => {
    if (elem.id == id) {
    elem.performer = req.body.performer;
    elem.genre = req.body.genre;
    elem.price = req.body.price;
    elem.day = req.body.day;
    elem.image = req.body.image;
    }
    return elem;
  });
  res.json({ message: "OK" });
});

router.route("/concerts/:id").delete((req, res, next) => {
  const id = req.params.id;
  const concert = db.concerts.filter((elem) => elem.id == id);
  const index = db.concerts.indexOf(concert[0]);
  db.concerts.splice(index, 1);
  res.json({ message: "OK" });
});

module.exports = router;