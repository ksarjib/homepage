const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    resave: false,
    secret: 'salt for cookies',
    saveUninitialized: false
}));

app.use(function(){
    if(!req.session.list) {
        req.session.values = {};
    }
    next();
});

let list = [];

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let output = "<ul>";
  for (let i=0; i < req.session.values['list']; i++) {
      output += `<li><% req.session.values['list'][i]%></li>`;
  }
  output += "</ul><a href='/add'>add</href>";
  res.send(output);
});

app.get('/add', (req, res) => {
    res.send(`<form method="post"><input name="item" /><input type="submit" /></form>`);
});

app.post('/add', (req, res, next) => {
    req.session.values['list'] = list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);