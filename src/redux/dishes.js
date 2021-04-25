//This file is about create a reducer function for Dishes Data


// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes'; 

// export the reducer Dishes function where it take two parameters -> the state (the defualt is DISHES) and actions 
// it will return 
export const Dishes = (state = DISHES, action ) => {

    switch(action.type){
        
        default:
            return state;
    }

}