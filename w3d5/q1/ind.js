const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
var listItems = [];
 
app.get("/", (req, res) => {
  let html = "<ul>";
  for (let i = 0; i < listItems .length; i++) {
    html = html + `<li>${listItems [i]}</li>`;
  }
  html = html + "</ul><a href='/add'>Add</a>";
  res.send(html);
});
 
app.get("/add", (req, res) => {
  res.send(`<form method="POST" action="/add"><input type="text" name="item"/>
    <input type="submit" value="Add"/></form>`);
});
 
app.post("/add", (req, res) => {
  listItems.push(req.body.item);
  res.redirect(303, "/");
});
 
app.listen(3000);