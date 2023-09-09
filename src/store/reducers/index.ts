import {combineReducers} from 'redux';
import machineTypesReducer from './machineTypesReducer'; // Import your reducers as needed

const rootReducer = combineReducers({
  machineTypes: machineTypesReducer,
  // Add more reducers here
});

export default rootReducer;
