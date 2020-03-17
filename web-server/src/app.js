const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

//What the server should do when the user visits
//a certain url. (Send back HTML? JSON?)

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