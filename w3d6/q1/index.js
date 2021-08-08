const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const style = hour < 18 && hour > 6 ? "day.css" : "night.css";
    res.render("index", {
        time: date.toTimeString(),
        style: style
    });
});
app.listen(3000);
