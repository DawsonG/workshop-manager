import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../constants/constants';
import { darkskyApiKey } from '../constants/private';

function fetchWeather() {
  return fetch(`https://api.darksky.net/forecast/${darkskyApiKey}/`)
  .then(res => res.json())
  .then(data => ({ data }))
  .catch(ex => {
    console.log('parsing failed', ex);
    return ({ ex });
  });
}

function* fetchWeatherSaga() {
  const { data, ex } = yield call(fetchWeather);
  if (data) {
    yield put({ type: constants.WEATHER_FETCH_SUCCESS, data });
  } else {
    yield put({ type: constants.WEATHER_FETCH_FAILURE, ex });
  }
}

export default function* weatherSagas() {
  yield takeLatest(constants.WEATHER_FETCH_REQUEST, fetchWeatherSaga);
}
