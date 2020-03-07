const request = require('postman-request');

const url = '';

request({ url: url, json: true }, (error, response) => {
    const currently = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain`);
})