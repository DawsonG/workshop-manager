import path from 'path';
import electron from 'electron';
import Datastore from 'nedb';

const app = electron.app || electron.remote.app;
const db = new Datastore({ filename: path.join(app.getPath('userData'), 'machines.db'), autoload: true });

export function getMachines(machineId) {
  db.findOne({ _id: machineId }, (error, response) => {
    if (error) {
      throw error;
    }

    return response;
  });
}

export function addMachine(machine) {
  db.insert(machine, (error) => {
    if (error) {
      throw error;
    }

    return true;
  });
}
