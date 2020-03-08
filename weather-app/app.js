const request = require('postman-request');


const url = //API KEY REMOVED

request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log('Error! Unable to connect to location services');
    } else if (response.body.error) {
        console.log('Unable to find location. Please try again.')
    } else {
        const currently = response.body.currently;
        console.log(`${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain`);    
    }
})



const latLongURL = //API KEY REMOVED
request({ url: latLongURL, json: true }, (error, response) => {
    if(error) {
        console.log('ERROR: Unable to connect to location services.')
    } else if(response.body.features.length == 0) {
        console.log('Unable to find location. Please try again.');
    } else {
        const latLong = response.body.features[0].center;
        console.log(`Longitude: ${latLong[0]}`);
        console.log(`Latitude: ${latLong[1]}`);
    }

});
