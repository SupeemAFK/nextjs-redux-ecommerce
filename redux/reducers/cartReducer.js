import { ACTION_TYPES } from '../constant/ACTION_TYPES'

const initialState = {
    cart: []
}

export function cartReducer(state=initialState, {type, payload}) {
    switch (type) {
        case ACTION_TYPES.ADD_TO_CART:
            return {...state, cart: [payload, ...state.cart]}

        case ACTION_TYPES.DELETE_FROM_CART:
            const updatedDeleteCart = state.cart.filter(cartItem => cartItem.id !== payload)
            return {...state, cart: updatedDeleteCart}
        
        case ACTION_TYPES.CLEAR_CART:
            return {...state, cart: []}

        case ACTION_TYPES.INCREASE_AMOUNT:
            const updatedIncreaseAmountCart = state.cart.map(cartItem => cartItem.id === payload ? {...cartItem, amount: cartItem.amount + 1} : cartItem)
            return {...state, cart: updatedIncreaseAmountCart}

        case ACTION_TYPES.DECREASE_AMOUNT:
            const updatedDecreaseAmountCart = state.cart.map(cartItem => cartItem.id === payload ? {...cartItem, amount: cartItem.amount - 1} : cartItem)
            return {...state, cart: updatedDecreaseAmountCart}

        default:
            return state
    }
} 