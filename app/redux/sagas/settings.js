import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../constants/constants';

function* fetchSettingsSaga() {
  const { data, ex } = yield call(fetchWeather);
  if (data) {
    yield put({ type: constants.WEATHER_FETCH_SUCCESS, data });
  } else {
    yield put({ type: constants.WEATHER_FETCH_FAILURE, ex });
  }
}

export default function* settingSagas() {
  yield takeLatest(constants.WEATHER_FETCH_REQUEST, fetchSettingsSaga);
}
