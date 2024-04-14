/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithasif 2023 All rights reserved
 * @author codewithasif <mohammadasif24@gmail.com>
 */

'use strict';

/**
 * Fetch data from server
 * @param {String} URL API url
 * @param {Function} callback callback 
 */


// const api_key = "a700777a2c56edfbd4beee8cc40c61b6";

// second
// const api_key = "bd44651f79f2eac2a33c462d176fc564";

// sadee 
const api_key = "20fdfb76008f0d97399a7057b61972e9";

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}


export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },

    /**
     * @param {String} query Search query e.g: "London", "New York"
     * @returns 
     */

    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }

}