import { FETCHING_START, FETCHING_SUCCESS, FETCHING_SMURF } from "../actions/actions";

const initialState = {
    isLoading: false,
    smurfs: [
        {
            name: "",
            age: "",
            height: "",
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: [{...action.payload}]
            };
        case FETCHING_SMURF: 
            return {
                ...state,
                isLoading: false,
                smurfs: [
                    ...state.smurfs,
                    {
                        name: action.payload,
                        age: action.payload,
                        height: action.payload,
                    }
                ]
            }
            default: 
            return state;
    }
}