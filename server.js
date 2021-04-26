const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const app = express();
const testimonialsRoutes = require('./testimonials.routes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api', testimonialsRoutes);

app.get('/', (req, res, next) => {
    res.json();
});

app.listen(8000, ()=> {
  console.log('listening on port: 8000');
});