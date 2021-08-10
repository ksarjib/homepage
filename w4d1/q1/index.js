const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.get('/addCookie', (req, res) => {
    res.render('addcookie', {cookies: req.cookies});
});

app.post('/addCookie', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    res.cookie(key,value);
    res.redirect(303, 'addCookie');
});

app.listen(3000, ()=>{console.log('Listening at port 3000')});