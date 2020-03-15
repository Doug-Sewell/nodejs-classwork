const request = require('postman-request');

const forecast = (long, lat, callback) => {
    const url = //DARK SKY API INFO REMOVED.

    request({url,json:true}, (error,{body}) => {
        if(error) {
            callback('ERROR: Unable to connect to location services',null);
        } else if(body.error) {
            callback('ERROR: Location does not exist! Please try again.',null)
        } else {
            callback(null,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability}% chance of rain`);
            console.log();    
        }
    })
}

module.exports = forecast;