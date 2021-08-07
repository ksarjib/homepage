const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/result', (req, res) => {
    let name = req.body.name ? req.body.name : undefined;
    let age = req.body.age ? req.body.age : undefined;

    res.send(`Welcome ${name} age: ${age}`)
});
app.listen(3000, () => {console.log('Listening on port 3000')});