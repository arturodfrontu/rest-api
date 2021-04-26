const express = require("express");
const db = require("../db");
const uuid = require('uuid');
const router = express.Router();

router.route("/seats").get((req, res, next) => {
  res.json(db.seats);
});

router.route("/seats/:id").get((req, res, next) => {
  const id = req.params.id;
  let result;
  if (id === "random") {
    let index = Math.floor(Math.random() * db.seats.length);
    result = db.seats[index];
  } else {
    result = db.seats.filter((elem) => {
      return elem.id == id;
    });
  }
  res.json(result);
});

router.route("/seats").post((req, res, next) => {
  randomId = uuid.v4();
  db.seats.push({
    id: randomId,
    day: req.body.day,
    seat: req.body.seat,
    client: req.body.client,
    email: req.body.email,
  });
  res.json({ message: "OK" });
});

router.route("/seats/:id").put((req, res, next) => {
  const id = req.params.id;
  db.seats.map((elem) => {
    if (elem.id == id) {
    elem.day = req.body.day;
    elem.seat = req.body.seat;
    elem.client = req.body.client;
    elem.email = req.body.email;
    }
    return el;
  });
  res.json({ message: "OK" });
});

router.route("/seats/:id").delete((req, res, next) => {
  const id = req.params.id;
  const seat = db.seats.filter((elem) => elem.id == id);
  const index = db.seats.indexOf(seat[0]);
  db.seats.splice(index, 1);
  res.json({ message: "OK" });
});

module.exports = router;