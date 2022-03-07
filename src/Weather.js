import {
  Button,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as types from "./redux/actiontTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },

  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Weather() {
  const classes = useStyles();
  const [serach, setsearch] = useState("");
  const [query, setquery] = useState("Gampaha");
  let dispatch = useDispatch();
  const { weather, error } = useSelector((state) => state.data); //recipe reducer is with name data so state.data

  console.log("state", weather);
  const lat = weather?.coord.lat
  const lon = weather?.coord.lon
  const city = weather?.name

  useEffect(() => {
    dispatch({ type: types.FETCH_WEATHER_START, payload: query });
  }, [query]);

  const updateSearch = (e) => {
    e.preventDefault();
    setquery(serach);
    setsearch("");
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          type="text"
          value={serach}
          onChange={(e) => setsearch(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "80px", height: "50px" }}
          onClick={updateSearch}
        >
          Search
        </Button>
      </form>

      {error == "Error: Request failed with status code 400" ||
      error == "Error: Request failed with status code 404" ? (
        <h1 style={{ color: "orange" }}>Check the name of the City again</h1>
      ) : null}

     
      

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ color: "white", height: "200px" }}
          >
            
            <h1>
              {weather?.name},{weather?.sys.country}
            </h1>
            {weather?.weather.map((item, index) => (
              <div key={index}style={{ color: "white" }}>
                <h2>{item.description} </h2>
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt=""
                />
              </div>
            ))}
            <h2>{weather?.weather.id}</h2>
            <h1>{weather?.main.temp}°C</h1>
            <h3>Fells Like: {weather?.main.feels_like}°C </h3>
            <h4>
              Max temp: {weather?.main.temp_max}°C &nbsp; &nbsp; &nbsp; &nbsp;
              Min temp: {weather?.main.temp_min}°C
            </h4>
            <h4>Wind speed: {weather?.wind.speed}Km/h</h4>
            <Link  to={{
              pathname:'/forecast',
              state:{lon:lon,lat:lat,city:city}
            }}>
              Forecast
            </Link>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Weather;
