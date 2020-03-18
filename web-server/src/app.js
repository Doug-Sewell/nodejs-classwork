const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

//What the server should do when the user visits
//a certain url. (Send back HTML? JSON?)

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Doug'
    });
});

app.get('/about',(req,res) => {
    res.render('about', {
        title:'About Me',
        name: 'Doug'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        prefferredCommunication: 'email'
    });
})

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