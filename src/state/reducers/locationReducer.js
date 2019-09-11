const initialLocationState = {
  location: ""
};

const locationReducer = (state = initialLocationState, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};

export default locationReducer;
