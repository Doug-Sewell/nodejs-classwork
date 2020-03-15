const request = require('postman-request');

const forecast = (long, lat, callback) => {
    const url = //DARKSKY API INFO REMOVED.

    request({url:url,json:true}, (error,response) => {
        if(error) {
            callback('ERROR: Unable to connect to location services',null);
        } else if(response.body.error) {
            callback('ERROR: Location does not exist! Please try again.',null)
        } else {
            callback(null,`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees outside. There is a ${response.body.currently.precipProbability}% chance of rain`);
            console.log();    
        }
    })
}

module.exports = forecast;