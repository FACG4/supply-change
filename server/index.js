const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controllers);
// app.use(favicon(path.join(__dirname, '..', 'client', 'build', 'logo.svg')));
// app.use(express.static(path.join(__dirname,'..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
});

app.listen(port);
