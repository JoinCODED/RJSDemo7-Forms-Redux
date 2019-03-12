import { FETCH_PEOPLE, ADD_PERSON } from "../actions/actionTypes";

const initialState = {
  people: []
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload
      };
    case ADD_PERSON:
      return {
        ...state,
        people: [action.payload, ...state.people]
      };
    default:
      return state;
  }
};

export default peopleReducer;
