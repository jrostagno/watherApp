import axios from "axios";

const apikey = "4ae2636d8dfbdc3044bede63951a019b";

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)

export const getCities = async (city) => {
  try {
    const json = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    let data = json.data;
    console.log(data);
    console.log(data.cod);

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
