//This file is about create a reducer function for PROMOTIONS Data

// Import promotions Data from PROMOTIONS Component 

import { PROMOTIONS } from '../shared/promotions';

// export the reducer Dishes function where it take two parameters -> the state (the defualt is PROMOTIONS) and actions 
// it will return 
export const Promotions = (state = PROMOTIONS, action ) => {

    switch(action.type){
        
        default:
            return state;
    }

}