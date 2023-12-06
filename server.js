const express = require('express');
const app = express();
const port = 3000;


const magic8ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
const randomAnswer = magic8ball[Math.floor(Math.random() * magic8ball.length)]

app.get('/greeting/:name',(req, res) => {
    console.log(req.params);
    res.send("What's up, " + req.params.name)
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    res.send("The tip is " + parseInt((req.params.tipPercentage/100)*req.params.total));
})

app.get('/magic/:id', (req, res) => {
    console.log(req.params)
   res.send(`<h1>${randomAnswer}</h1>`  + req.params.id + '?')
})


app.listen(port, () => {
    console.log('listening on Port' , port);
})