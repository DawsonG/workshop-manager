import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import machines from '../../Machines/reducer';

import { OPEN_MODAL, CLOSE_MODAL } from '../../Modals/actions';
import * as constants from '../constants/constants';

const initialState = {
  computer: {
    name: '',
    type: '',
    location: ''
  },
  location: { lat: 39.828217, lng: -98.579512 },
  weather: { temperature: 0 },
  storageDirectory: '',
  isModalOpen: false,
  modal: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.WEATHER_FETCH_SUCCESS:
      return update(state, {
        $set: {
          weather: { temperature: action.payload.currently.temperature }
        }
      });
    case constants.SETTINGS_FETCH_SUCCESS:
      return update(state, {
        $set: {
          computer: {
            name: action.payload.computer.name,
            type: action.payload.computer.type,
            location: action.payload.computer.location
          },
          location: { lat: action.payload.location.lat, lng: action.payload.location.lng },
          storageDirectory: action.payload.storageDirectory
        }
      });
    case constants.SETTINGS_FETCH_FAILURE:
      return update(state, {
        $set: {
          isModalOpen: true,
          modal: 'settings'
        }
      });
    case OPEN_MODAL:
      return update(state, {
        $set: {
          isModalOpen: true,
          modalName: action.modalName
        }
      });
    case CLOSE_MODAL:
      return update(state, {
        $set: {
          isModalOpen: false
        }
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  machines,
  routing
});

export default rootReducer;
