import * as Actions from "../Actions/Types";

const Exchange = (state = { currency: "INR", value: 0, rates: [] }, action) => {
  switch (action.type) {
    case Actions.UPDATE_CURRENCY: {
      return { ...state, currency: action.value };
    }

    case Actions.UPDATE_VALUE: {
      return { ...state, value: action.value };
    }

    case Actions.UPDATE_RATES: {
      return { ...state, rates: action.value };
    }

    default:
      return state;
  }
};

export default Exchange;
