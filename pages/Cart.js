import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/actions/actions'

import styles from '../styles/Cart.module.css'

//components
import CartItem from '../components/CartItem'
import AddressForm from '../components/AddressForm'

export default function Cart() {
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    if (cart.length === 0) {
        return (
            <div className={styles.cartItemContainer}>
                <h1>No items here</h1>
            </div>
        )
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.cart}>
                <div className={styles.cartInfo}>
                    <h1>`{cart.length}` items</h1>
                    <button onClick={() => dispatch(clearCart())} className={styles.btn}>Clear cart</button>
                </div>
                <div className={styles.cartItemContainer}>
                    {cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)}
                </div>
            </div>
            <div className={styles.addressFormContainer}>
                <h1>Please put your infomations</h1>
                <AddressForm />
            </div>
        </div>
    )
}
