
//This file is about create a reducer function for Comments Data

import { COMMENTS } from '../shared/comments';
import * as ActionTypes from "./ActionTypes";

//initiate action when the action is dispatched by the ActionCreator

/* This will take the current state and the action(task) and create a new state and return it to or 
implelent it to redux store (configureStore) then the store will supply it to the application */
export const Comments = (state = COMMENTS, action ) => {

    switch(action.type){
        case ActionTypes.ADD_COMMENT :
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment)        // i cant modify the state directly so i use concat where it return a new object for me with the additional data 
        
        // This will be return the default state if No Action happend 
        default:
            return state;
    }

}