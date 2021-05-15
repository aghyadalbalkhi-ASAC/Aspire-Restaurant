//This file is about create a reducer function for LEADERS Data


// Data Shared Component
import { LEADERS } from '../shared/leaders';

// export the reducer Dishes function where it take two parameters -> the state (the defualt is LEADERS) and actions 
// it will return 
export const Leaders = (state = LEADERS, action ) => {

    switch(action.type){
        
        default:
            return state;
    }

}