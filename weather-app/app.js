const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const city = process.argv[2];

if (!city) {
    console.log('Please provide a location to look up the forecast.');
} else {
    geocode(city, (error, data) => {
        if (error) {
            //The return statement causes the code to stop running. We could use an else
            //statement, but this makes the code look cleaner so we don't need to nest
            //everything in an else clause.
            return console.log('Error:', error);
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);

            }

            console.log(data.location);
            console.log(forecastData);
        });
    });
}



