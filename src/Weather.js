import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
    const [query, setquery] = useState("London");
    let dispatch = useDispatch();
    const { weather } = useSelector((state) => state.data); //recipe reducer is with name data so state.data
    console.log("state", weather);

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

    </div>
  )
}

export default Weather