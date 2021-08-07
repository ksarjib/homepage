const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "person";
    }
    let age = req.query.age;
    if (!age) {
        age = "50";
    }
    res.send(`Welcome ${name}, Age ${age}`);
});
app.listen(3000);