const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const requestBody = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAe8wZr-l9hc_lHlOUuzKeloLcEmPCsX2k&cx=015836358660699203191:ygc14bznb5q&searchType=image&num=10"

/*request(url, (err, res, body) => {
  const obj = JSON.parse(body);
  const response = obj.items.map(val => {
    return {
      img_url: val.link,
      alt_text: val.snippet,
      page_url: val.image.contextLink
    };
  });
  console.log(response);
});*/

app.get("/api/imagesearch/:query", (req, res) => {
  console.log(req.params.query);
  let query = req.params.query.match(//);
  query = "&q=" + query;
  const param = "";
  const offset = "&start=1";
  const url = requestBody + query + offset;
  res.send("OK")
});


app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
