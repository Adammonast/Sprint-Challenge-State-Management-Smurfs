import axios from "axios";
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: "FETCHING_START" });
  axios.get("http://localhost:3333/smurfs")
  .then(response => {dispatch({type: "FETCHING_SUCCESS", payload: response.data})})
  .catch(err => {dispatch({type: "FETCHING_FAILURE", payload: err.response})});
};

export const addSmurf = newSmurf => {
    return {type: "FETCHING_SMURF", payload: newSmurf}
}