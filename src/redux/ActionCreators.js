import * as ActionTypes from "./ActionTypes";
// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes'; 


import { baseUrl } from '../shared/baseUrl';


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

// its a Thunk  | function call function 
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
    
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
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



//Fetch Action Creator

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});