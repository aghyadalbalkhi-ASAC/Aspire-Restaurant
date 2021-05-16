
//This file is about create a reducer function for Comments Data
import * as ActionTypes from "./ActionTypes";

//initiate action when the action is dispatched by the ActionCreator

/* This will take the current state and the action(task) and create a new state and return it to or 
implelent it to redux store (configureStore) then the store will supply it to the application */
export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
  };