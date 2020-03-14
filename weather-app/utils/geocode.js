const request = require('postman-request');

const geocode = (address, callback) => {
    const url = //MAPBOX API KEY REMOVED.
    request({url:url,json:true}, (error, response) => {
        if(error){
            callback('Error - unable to connect to locaiton services',null);
            
        } else if (response.body.features.length === 0) {
            callback('No location with that name found. Please try again', null);
        } else {
            callback(null,{
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1]

            })
        }
    })
}

module.exports = geocode;