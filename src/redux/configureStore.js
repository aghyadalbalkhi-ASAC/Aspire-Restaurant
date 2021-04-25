import {createStore , combineReducers} from 'redux';

//reducers
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Leaders } from './leaders'
import { Promotions } from './promotions'

export const ConfigureStore = () => {

    // this store will export as mapStateToProps so all this date will be in the state of mapStateToProps
    const store = createStore(
        //Reducer,                                       // reducer
        //initialState,                                 // our initialState
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        })
    );

    return store;
}