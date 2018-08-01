const express = require('express');
const path = require('path');
const app = express();
const controllers = require('./controllers');

app.use(controllers);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(9000);
