import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getMachines, addMachine } from './storage';
import * as constants from './constants';

function* fetchMachineSaga(action) {
  try {
    const machine = yield call(getMachines, action.payload.machineId);
    yield put({ type: constants.MACHINE_FETCH_SUCCESS, success: true, result: machine });
  } catch (e) {
    yield put({ type: constants.MACHINE_FETCH_FAILURE, success: false, error: e });
  }
}

function* addMachineSaga(action) {
  try {
    yield call(addMachine, action.payload.machine);
    yield put({ type: constants.MACHINE_ADD_SUCCESS, success: true });
  } catch (e) {
    yield put({ type: constants.MACHINE_ADD_FAILURE, success: false, error: e });
  }
}

export default function* machineSagas() {
  yield takeLatest(constants.MACHINE_FETCH_REQUEST, fetchMachineSaga);
  yield takeEvery(constants.MACHINE_ADD_REQUEST, addMachineSaga);
}
