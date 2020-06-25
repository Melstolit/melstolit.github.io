const axios = require('axios');
//const querystring = require('querystring');
const apiUrl = 'https://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=csv&';
export const weatherMixin = {
    methods: {
        getWeatherData(stationID, year, month) {
            return axios.get(`${apiUrl}stationID=${stationID}&Year=${year}&Month=${month}&timeframe=1`)
        }
    }
}