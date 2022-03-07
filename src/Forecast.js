import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './forcast.css'
import * as types from "./redux/actiontTypes";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Opacity } from "@material-ui/icons";

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

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Forecast() {
  const classes = useStyles();
  const cardClasess = cardStyles();
  const location = useLocation();
  let dispatch = useDispatch();
  const { forecast, error } = useSelector((state) => state.data);
  console.log("forecast", forecast);
  const query = {
    lon: location.state.lon,
    lat: location.state.lat,
  };

  useEffect(() => {
    dispatch({ type: types.FETCH_FORECAST_START, payload: query });
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h1>Forecast</h1>
      <h2>{location.state.city} </h2>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            {forecast &&
              forecast.daily &&
              forecast.daily.map((item, index) => (
                <Grid
                  key={index}
                  justifyContent="center"
                  item
                  style={{ color: "white", fontweight: "900" }}
                >
                  <div className="transbox" style={{ color: "white" }}>
                    <h2>Day:{index + 1} </h2>
                    {item.weather.map((item, index) => (
                      <div key={index}>
                        <br />
                        {item.description} <br />
                        <img
                          src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                          alt=""
                        />
                      </div>
                    ))}

                    <Typography>Morning{item.temp.morn}</Typography>
                  </div>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Forecast;
