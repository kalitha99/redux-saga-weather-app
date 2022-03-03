import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./actiontTypes";
import { getWeather } from "./api";

export function* onLoadWeatherAsync({ payload: query }) {
  try {
    console.log('query',query);
    const response = yield call(getWeather, query);
    yield put({ type: types.FETCH_WEATHER_SUCESSS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_WEATHER_FALI, payload: error });
  }
}

export function* onLoadWeather() {
  yield takeLatest(types.FETCH_WEATHER_START, onLoadWeatherAsync);
}

const weatherSaga = [fork(onLoadWeather)];

export default function* rootSaga() {
  yield all([...weatherSaga]);
}