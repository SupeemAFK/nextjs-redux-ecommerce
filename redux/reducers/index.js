import { cartReducer } from '../reducers/cartReducer'
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    cart: cartReducer
})