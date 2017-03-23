import update from 'immutability-helper';
import * as constants from './constants';
import { ERROR } from '../redux/constants/constants';

const initialState = {
  machines: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.MACHINE_FETCH_SUCCESS:
      return update(state, {
        $set: {
          machines: action.payload.machines
        }
      });
    case constants.MACHINE_ADD_SUCCESS:
      return update(state, {
        $push: {
          items: [{
            name: action.machine.name,
            description: action.machine.description
          }]
        }
      });
    case constants.MACHINE_ADD_FAILURE:
    case constants.MACHINE_REMOVE_FAILURE:
    case constants.MACHINE_FETCH_FAILURE:
      console.log(`An error occurred during ${action.type}`, action.error);

      return update(state, {
        $set: {
          message: {
            text: action.error.message,
            status: ERROR,
            fade: 0
          }
        }
      });
    /*
    case constants.REMOVE_MACHINE:
      // return update(state, {
      //
      // });
      break;*/
    default:
      return state;
  }
};
