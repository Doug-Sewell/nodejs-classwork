const request = require('postman-request');
const fetch = require('node-fetch');


/*
const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/fa657b0aef8b136932d232e248b2fe52/${long},${lat}`;

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
*/

const forecast = (long, lat, callback) => {
    const url = //DARKSKY REMOVED
    fetch(url)
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                callback('ERROR: Unable to connect to location services', null);
            } else if (json.error) {
                callback('ERROR: Location does not exist! Please try again.', null);
            } else {
                callback(null, `${json.daily.data[0].summary} It is currently ${json.currently.temperature} degrees outside. There is a ${json.currently.precipProbability}% chance of rain`);
            }
        }
        ).catch(err => {
            console.log(err);
        });
}

module.exports = forecast;