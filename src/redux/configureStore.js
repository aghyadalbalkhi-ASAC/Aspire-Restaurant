import {createStore , combineReducers,applyMiddleware} from 'redux';

//reducers
// we have split the management of state into different reducers that manage partial state
// we need to combine them together so we use combineReducers in createStore

/* this file will be response of all the state data in application and it re render the state if
any of these data changed in it's reducer functions

ex -> if any actions change the comment data in comment file then the comment file will 
return a new state so the configureStore here will re render again 
otherwise if there isnt any action then the orginal data will return from comment file (which is the same)

*/


import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//
export const ConfigureStore = () => {

    // this store will export as mapStateToProps so all this date will be in the state of mapStateToProps
    const store = createStore(

        // Combining Reducers
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        }),applyMiddleware(thunk,logger)
    );

    return store;
}