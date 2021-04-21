// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes';              // Data Shared Component
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


//this is the initial configuration for state

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};


// specify initialState as the default value for a parameter
//So, when the reducer is first called by my store, my store would have no state,
// so the stage will be uninitialized. So it will be undefined there. So,
// in order to avoid issues with that I'm going to say that if the state is undefined, the default value will be initialState

export const Reducer = (state = initialState, action) => {
    return state;
};