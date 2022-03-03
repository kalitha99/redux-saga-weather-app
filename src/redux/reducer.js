import * as types from "./actiontTypes";

const initialState = {
  weather: [],
  error: null,
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_WEATHER_SUCESSS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    case types.FETCH_WEATHER_FALI:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default weatherReducer;
