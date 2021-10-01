'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {

    fs.readFile('index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });

});

app.get('/stylesheet.css', (req, res) => {

    fs.readFile('stylesheet.css', (err, data) => {
        res.send(data);
    });

});

app.get('/images/oscar.png', (req, res) => {

  fs.readFile('images/oscar.png', (err, data) => {
      res.send(data);
  });

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});