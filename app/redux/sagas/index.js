import { fork } from 'redux-saga/effects';

import settingSagas from './settings';
import weatherSagas from './weather';
import machineSagas from '../../Machines/sagas';

export default function* rootSaga() {
  yield [
    fork(settingSagas),
    fork(weatherSagas),
    fork(machineSagas),
  ];
}
