const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const apikey = "AIzaSyCL5Lj7n27PI6SsVAuybPf85wz5xeyBQLw";

app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
