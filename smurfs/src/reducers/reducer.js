import { FETCHING_START, FETCHING_SUCCESS, ADD_SMURF } from "../actions/actions";

const initialState = {
    isFetching: false,
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // smurfs: [{...action.payload}]
                smurf: action.payload
            };
        case ADD_SMURF: 
            return {
                ...state,
                isFetching: false,
                smurfs: [
                    // ...state.smurfs,
                    // {
                    //     name: action.payload,
                    //     age: action.payload,
                    //     height: action.payload,
                    // }
                    {...action.payload}]
            }
            default: 
            return state;
    }
}