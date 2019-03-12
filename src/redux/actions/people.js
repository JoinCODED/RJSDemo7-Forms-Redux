import { FETCH_PEOPLE, ADD_PERSON } from "./actionTypes";

import axios from "axios";

export const fetchPeople = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      const people = res.data;
      dispatch({
        type: FETCH_PEOPLE,
        payload: people,
      });
    } catch (error) {
      console.error("Something went wrong while fetching people");
      console.error(error);
    }
  };
};

export const submitPerson = (person, reset) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/alias/", person);
      const newPerson = res.data;
      dispatch({
        type: actionTypes.SUBMIT_PERSON,
        payload: newPerson,
      });
      reset();
    } catch (error) {
      console.error("Person did not submit!");
      console.error(error);
    }
  };
};
