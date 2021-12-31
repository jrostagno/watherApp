import axios from "axios";
const { REACT_APP_APIKEY_WATHERAPP } = process.env;

export const getCities = async (city) => {
  try {
    const json = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_APIKEY_WATHERAPP}&units=metric`
    );

    let data = json.data;

    if (data.cod === "404") {
      return [];
    } else {
      let city = {
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        img: data.weather[0].icon,
        id: data.id,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temp: data.main.temp,
        name: data.name,
        weather: data.weather[0].main,
        clouds: data.clouds.all,
        latitud: data.coord.lat,
        longitud: data.coord.lon,
      };

      return city;
    }
  } catch (error) {
    console.log(error);
  }
};
