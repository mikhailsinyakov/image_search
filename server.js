const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const requestBody = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAe8wZr-l9hc_lHlOUuzKeloLcEmPCsX2k&cx=015836358660699203191:ygc14bznb5q&searchType=image&num=10"


app.get("/api/imagesearch/:query", (req, res) => {
  const query = "&q=" + req.params.query.replace(" ", "+");
  let offset = req.query.offset ? req.query.offset * 10 + 1 : 1;
  offset = "&start=" + offset;
  const url = requestBody + query + offset;
  request(url, (err, response, body) => {
    const obj = JSON.parse(body);
    const result = obj.items.map(val => {
      return {
        img_url: val.link,
        alt_text: val.snippet,
        page_url: val.image.contextLink
      };
    });
    res.json(result);
  });
});


app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
