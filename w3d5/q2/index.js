const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<form action="result" method="post">&nbsp&nbsp' +
            '<label>Name</label>&nbsp&nbsp<input type="text" name="name"/>&nbsp&nbsp' +
            '<label>Age</label>&nbsp&nbsp<input type="text" name="age"/>&nbsp&nbsp' +
            '<button type="submit">Submit Query</button>');
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name}, Age ${age}`);
});
app.listen(3000);