const express = require('express');

const app = express();

app.listen(3001);

app.get('/',(req, res) => {
    res.sendFile('./view/index.html',{root:__dirname})
})

app.get('/about',(req, res) => {
    res.sendFile('./view/about.html',{root:__dirname})
})

//redirection
app.get('/about-us',(req, res) => {
    res.redirect('/about')
})

//404
//this must be last as it runs from top to bottom and fires this callback if no path matches above
app.use((req, res) => {
    res.sendFile('./view/404.html',{root:__dirname})
})  