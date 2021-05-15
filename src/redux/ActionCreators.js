import * as ActionTypes from "./ActionTypes";
// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes'; 
//This is a function that creates an action object. 

// This will create a new comment ojbect were it will be presented as an action object

/* {
    type : 'name of action - > its a string'

    payload : the data of my actions - > the comment data
}
*/

export const addComment =  (dishId,rating,author,comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload : {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});