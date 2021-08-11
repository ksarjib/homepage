const express = require('express');
const path = require('path');


const app = express();

// app.set('view engine', 'ejs');
// app.set('view', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'js')));

let list = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

let answer = '';
app.get('/eightball', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.post('/ask', (req, res) => {
    if (!req.body.question) {
        res.status(400);
        res.end();
    }
    let randomIndex = Math.floor(Math.random() * list.length);
    console.log(randomIndex);
    answer = list[randomIndex];
    res.status(200);
    res.json({ans: answer});
});

app.listen(3000, () => {console.log('Server started on port 3000')});