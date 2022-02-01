const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_COUNTER":
      return { ...state, counter: payload };
    default:
      return state;
  }
};
