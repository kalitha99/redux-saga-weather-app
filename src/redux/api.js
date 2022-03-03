import axios from "axios";

const YOUR_APP_ID = "";



export const getWeather = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${YOUR_APP_ID}`;
    return await axios.get(url)
}
