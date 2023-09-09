import AsyncStorage from '@react-native-async-storage/async-storage';
import { AttributeType, MachineType } from '../../types';
import { ActionTypes } from '../actionTypes';
export interface SetMachineTypesAction {
  type: ActionTypes.SET_MACHINE_TYPES;
  payload: MachineType[];
}

export interface AddMachineTypeAction {
  type: ActionTypes.ADD_MACHINE_TYPE;
  payload: MachineType;
}
export interface EditMachineTypeAction {
  type: ActionTypes.EDIT_MACHINE_TYPE;
  payload: MachineType;
}

export interface DeleteMachineTypeAction {
  type: ActionTypes.DELETE_MACHINE_TYPE;
  payload: {
    id: string;
  };
}

const initialState: MachineType[] = [
  {
    id: '123',
    name: 'Crane',
    attributes: [
      {
        id: 'property',
        name: 'property',
        type: AttributeType.TEXT,
      },
    ],
    titleAttribute: 'weight',
  },
  {
    id: '12345',
    name: 'Bull Dozer',
    attributes: [
      {
        id: 'weight',
        name: 'weight',
        type: AttributeType.TEXT,
      },
      {
        id: 'modal',
        name: 'modal',
        type: AttributeType.NUMBER,
      },
      {
        id: 'age',
        name: 'age',
        type: AttributeType.NUMBER,
      },
    ],
    titleAttribute: 'weight',
  },
];

type MachineTypesReducerAction =
  | SetMachineTypesAction
  | AddMachineTypeAction
  | EditMachineTypeAction
  | DeleteMachineTypeAction;

const machineTypesReducer = (
  state = initialState,
  action: MachineTypesReducerAction,
): MachineType[] => {
  switch (action.type) {
    case ActionTypes.SET_MACHINE_TYPES:
      return [...action.payload];
    case ActionTypes.ADD_MACHINE_TYPE:
      return [...state, action.payload];
    case ActionTypes.EDIT_MACHINE_TYPE:
      const updatedState = state.map(machineType =>
        machineType.id === action.payload.id
          ? { ...machineType, ...action.payload }
          : machineType,
      );

      // Save the updated state to AsyncStorage
      AsyncStorage.setItem('machineTypes', JSON.stringify(updatedState))
        .then(() => console.log('State saved to AsyncStorage'))
        .catch(error =>
          console.error('Error saving state to AsyncStorage', error),
        );

      return updatedState;
    case ActionTypes.DELETE_MACHINE_TYPE:
      return state.filter(machineType => machineType.id !== action.payload.id);
    default:
      return state;
  }
};

export default machineTypesReducer;
