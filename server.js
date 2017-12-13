const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const start = "https://www.googleapis.com/customsearch/v1?"
const apikey = "key=AIzaSyAe8wZr-l9hc_lHlOUuzKeloLcEmPCsX2k";
const searchEngine = "&cx=";
const query = "&cat";
const numResults = "&num=10";
const offset = "&start=0"
const url = start + apikey + searchEngine + query + numResults + offset;


app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
