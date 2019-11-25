const axios = require('axios');

const url = 'http://api.openweathermap.org';

async function getWeather(data) {
  const res = await axios.get(`${url}/data/2.5/forecast?q=${data.query}&units=metric&APPID=${process.env.APPID}`)
    .then(res => res.data);

  if (res.cod !== "200") return { code: res.cod }

  return {
    code: res.cod,
    city: res.city.name,
    country: res.city.country,
    weather: res.list
      .filter((w, i) => i % 8 === 0)
      .map(w => ({
        temp: Math.round(w.main.temp),
        descr: w.weather[0].description,
        icon: `openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`,
        date: new Date(w.dt_txt).toDateString(),
      }))
  }
};

exports.handler = async function handler(event) {
    return getWeather(event.data);
};
