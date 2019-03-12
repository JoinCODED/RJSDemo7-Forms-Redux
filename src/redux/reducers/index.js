import { combineReducers } from "redux";

import peopleReducer from "./people";
import errorReducer from "./errors";

const rootReducer = combineReducers({
  peopleState: peopleReducer,
  errors: errorReducer
});

export default rootReducer;
