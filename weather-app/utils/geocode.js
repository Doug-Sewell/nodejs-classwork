const request = require('postman-request');

const fetch = require('node-fetch');


/*
const geocode = (address, callback) => {
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZG91Z2xhc2FzZXdlbGwiLCJhIjoiY2s3aWN2eGFmMGpkazNxbzh1YXZyOHIwaCJ9.M_P_KGF_q6r3XkRQA46nQg&limit=1`;
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
*/

const geocode = (address, callback) => {
    const url =//MABOX API REMOVED
    fetch(url)
    .then(res => res.json())
    .then(json => {
        callback(null,{
            location: json.features[0].place_name,
            latitude: json.features[0].center[1],
            longitude: json.features[0].center[0]
        })
    }).catch(err => {
        //callback('No location with that name found. Please try again', null);
        console.log(err);
    })
}

module.exports = geocode;