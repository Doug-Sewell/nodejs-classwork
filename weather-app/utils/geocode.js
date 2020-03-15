const request = require('postman-request');

const geocode = (address, callback) => {
    const url =//MAPBOX API INFO REMOVED.
    request({url,json:true}, (error, {body}) => {
        if(error){
            callback('Error - unable to connect to locaiton services',null);
            
        } else if (body.features.length === 0) {
            callback('No location with that name found. Please try again', null);
        } else {
            callback(null,{
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode;