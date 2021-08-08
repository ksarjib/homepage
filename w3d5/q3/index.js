const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
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
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
app.post('/result', (req, res) => {
    let name = req.body.name ? req.body.name : undefined;
    let age = req.body.age ? req.body.age : undefined;

    res.send(`Welcome ${name} age: ${age}`)
});
app.listen(3000, () => {console.log('Listening on port 3000')});