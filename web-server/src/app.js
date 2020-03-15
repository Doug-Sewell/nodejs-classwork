const express = require('express');

const app = express();


//What the server should do when the user visits
//a certain url. (Send back HTML? JSON?)
app.get('', (req,res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help',(req,res) => {
    res.send({
        name: 'Doug',
        location:'Charlotte'
    });
});

app.get('/about',(req,res) => {
    res.send('<h1>About</h1>');
});

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'Cloudy with a chance of rain',
        location:'Charlotte'
    });
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});