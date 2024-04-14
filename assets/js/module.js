/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithasif 2023 All rights reserved
 * @author codewithasif <mohammadasif24@gmail.com>
 */

'use strict';


export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];


/**
 * 
 * @param {number} dateUnix unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {String} date string formate: "Sunday 10, feb"
 */

export const getData = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const mothName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthNames}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {String} Time string. format: "HM:MM AM/PM"
 */

export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 ||12}:${minutes} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {String} Time string. format: "HM: AM/PM"
 */

export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 ||12} ${period}`;
}


/**
 * 
 * @param {number} mps Metter Per Seconds
 * @returns {number} Kilometer per Hours
 */


export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}


export const apiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2: {
        level: "Fair",
        message: "Air qulaity is acceptable; however, for some pollutants there may be a moderate health concern for a very samll number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may being to experience health effects; memebers of sensitive groups may experience health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions, the entire population is more likely to be affected."
    }
}