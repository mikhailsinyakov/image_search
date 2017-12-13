const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT;
const mongoConnect = require("./mongoConnect");

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
    mongoConnect((err, db) => {
      if (err) throw err;
      const collection = db.db("freecodecamp_projects").collection("image_search");
      collection.insert({
        term: req.params.query,
        when: new Date().toString()
      });
      db.close();
    });
    res.json(result);
  });
});

app.get("/api/latest/imagesearch", (req, res) => {
  mongoConnect((err, db) => {
    if (err) throw err;
    const collection = db.db("freecodecamp_projects").collection("image_search");
    collection.find().toArray((err, result) => {
      const json = result.reverse()
                          .filter((val, i) => i < 10)
                          .map(val => {
         return {
           term: val.term,
           when: val.when
         };
      });
      res.json(json);
    })
    db.close();
  });
});

app.get("*", (req, res) => {
  const obj = {
    error: "Invalid request, please get more information on https://wide-drawer.glitch.me"
  }
  res.json(obj);
});

app.listen(port);
