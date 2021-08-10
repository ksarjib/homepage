const express = require('express');
const url = require('url');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', function (req, res) {
    const date = new Date();
    const hour = date.getHours();
    let styleLink;
    if (hour >= 6 && hour <= 18) {
        styleLink = 'day.css';
    } else {
        styleLink = 'night.css';
    }
    console.log(styleLink);
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <link rel="stylesheet" href="css/${styleLink}">
                </head>
                <body>
                    <form action="result" method="post">
                        <label>Name</label>&nbsp&nbsp<input type="text" name="name"/>&nbsp&nbsp
                        <label>Age</label>&nbsp&nbsp<input type="text" name="age"/>&nbsp&nbsp
                        <button type="submit">Submit Query</button>
                    </form>
                </body>
            </html>`);
    });

app.post('/result', (req, res) => {
    res.redirect(303, url.format({
        pathname: "/output",
        query: req.body
    }));
});

app.get('/output', function (req, res) {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name} age: ${age}`);
});

app.listen(3000, () => {console.log('Listening on port 3000')});