const path = require('path');
const express = require('express');
const app = express();
const controllers = require('./controllers');
const bodyParser = require('body-parser');

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controllers);
app.use(express.static(path.join(__dirname,'..', 'client', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
});

app.listen(9000);
