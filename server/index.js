const path = require('path');
const express = require('express');
const app = express();
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
console.log(require('bcryptjs').hashSync('12345678',8));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controllers);
app.use(express.static(path.join(__dirname,'..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
});

app.listen(port);
