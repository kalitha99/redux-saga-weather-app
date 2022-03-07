import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./actiontTypes";
import { getForecast, getWeather } from "./api";

export function* onLoadWeatherAsync({ payload: query }) {
  try {
    //console.log("query", query);
    const response = yield call(getWeather, query);
    yield put({ type: types.FETCH_WEATHER_SUCESSS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_WEATHER_FALI, payload: error });
  }
}

export function* onLoadWeather() {
  yield takeLatest(types.FETCH_WEATHER_START, onLoadWeatherAsync);
}




export function* onLoadForecastAsync({ payload: query }) {
  try {
    console.log("query2", query);
    const response = yield call(getForecast, query);
    yield put({ type: types.FETCH_FORECAST_SUCESSS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_FORECAST_FALI, payload: error });
  }
}

export function* onLoadForecast() {
  yield takeLatest(types.FETCH_FORECAST_START, onLoadForecastAsync);
}




const weatherSaga = [fork(onLoadWeather),fork(onLoadForecast)];

export default function* rootSaga() {
  yield all([...weatherSaga]);
}
