import { ACTION_TYPES } from "../constant/ACTION_TYPES";

export function addToCart(cartItem) {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        payload: cartItem
    }
}

export function deleteFromCart(id) {
    return {
        type: ACTION_TYPES.DELETE_FROM_CART,
        payload: id
    }
}

export function clearCart() {
    return {
        type: ACTION_TYPES.CLEAR_CART
    }
}

export function increaseAmount(id) {
    return {
        type: ACTION_TYPES.INCREASE_AMOUNT,
        payload: id
    }
}

export function decreaseAmount(id) {
    return {
        type: ACTION_TYPES.DECREASE_AMOUNT,
        payload: id
    }
}