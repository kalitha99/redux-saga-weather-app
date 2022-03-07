import * as types from "./actiontTypes";

const initialState = {
  weather: [],
  error: null,
  loading: false,
  forecast: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_START:
    case types.FETCH_FORECAST_START:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case types.FETCH_WEATHER_SUCESSS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
        error: "",
      };

    case types.FETCH_WEATHER_FALI:
    case types.FETCH_FORECAST_FALI:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_FORECAST_SUCESSS:
      return {
        ...state,
        loading: false,
        error: '',
        forecast:action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default weatherReducer;
