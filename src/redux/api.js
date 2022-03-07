import axios from "axios";

const YOUR_APP_ID = "";



export const getWeather = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${YOUR_APP_ID}`;
    return await axios.get(url)
}

export const getForecast = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${YOUR_APP_ID}`;
    return await axios.get(url)
}