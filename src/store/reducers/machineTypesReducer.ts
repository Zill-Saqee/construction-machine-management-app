const initialState = {
  machineTypes: [],
};

const machineTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MACHINE_TYPES':
      return {
        ...state,
        machineTypes: action.payload,
      };
    default:
      return state;
  }
};

export default machineTypesReducer;
