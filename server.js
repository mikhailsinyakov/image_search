const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const start = "https://www.googleapis.com/customsearch/v1?"
const apikey = "key=AIzaSyAe8wZr-l9hc_lHlOUuzKeloLcEmPCsX2k";
const searchEngine = "&cx=015836358660699203191:ygc14bznb5q";
const query = "&q=cat";
const type = "&searchType=image";
const numResults = "&num=10";
const offset = "&start=1"
const url = start + apikey + searchEngine + query + numResults + offset;
request(url, (err, res, body) => {
  console.log(body);
});


app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
