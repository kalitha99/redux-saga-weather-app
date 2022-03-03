import axios from "axios";

const YOUR_APP_ID = "dd0554729e438e9d902450d082f3ea55";



export const getWeather = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${YOUR_APP_ID}`;
    return await axios.get(url)
}