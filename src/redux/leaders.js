//This file is about create a reducer function for LEADERS Data

import * as ActionTypes from './ActionTypes';


// Data Shared Component
// import { LEADERS } from '../shared/leaders';

// export the reducer Dishes function where it take two parameters -> the state (the defualt is LEADERS) and actions 
// it will return 
export const Leaders = (state = { isLoading: true,
    errMess: null,
    leaders:[]},     action ) => {

    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
 
        default:
            return state;
    }

}