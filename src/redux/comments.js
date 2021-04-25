import { COMMENTS } from '../shared/comments';
import * as ActionTypes from "./ActionTypes";


export const Comments = (state = COMMENTS, action ) => {

    switch(action.type){
        case ActionTypes.ADD_COMMENT :
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment)        // i cant modify the state directly so i use concat where it return a new object for me with the additional data 
        default:
            return state;
    }

}