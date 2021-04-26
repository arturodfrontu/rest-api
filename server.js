const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res,next) => {
    res.json(
        {msg: 'CORS is enabled'}
    );
});

app.listen(8000, ()=> {
  console.log('listening on port: 8000');
});