import { SET_ERRORS } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
