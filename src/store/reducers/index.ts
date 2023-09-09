import {combineReducers} from 'redux';
import machineTypesReducer from './machineTypesReducer'; // Import your reducers as needed
import machinesReducer from './machinesReducer';

const rootReducer = combineReducers({
  machineTypes: machineTypesReducer,
  machines: machinesReducer,
});

export default rootReducer;
