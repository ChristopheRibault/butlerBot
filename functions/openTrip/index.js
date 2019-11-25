const axios = require('axios').create({
  baseURL: 'https://opentripmap-places-v1.p.rapidapi.com/en',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.APPID,
  }
});

const opentripApi = {
  getCityCoord: (event) => {
    return axios
      .get('/places/geoname', {
        params: {
          name: event.query
        }
      })
  },

  getAttractionList: (event) => {
    return axios
      .get('/places/radius', {
        params: {
          "kinds": event.kind,
          "rate": "3",
          "radius": event.radius,
          "lat": event.lat,
          "lon": event.lon,
        }
      })
  },

  getAttractionDetails: (event) => {
    return axios
      .get(`/places/xid/${event.xid}`)
  }
}

exports.handler = async function handler(event) {
  if (!event || !event.action || typeof opentripApi[event.action] !== 'function') {
    return { error: 'The method property must be a valid and implemented API call, please take a look at the readme.' }
  }

  return opentripApi[event.action](event)
    .then(res => res.data)
    .catch(error => error)
};
