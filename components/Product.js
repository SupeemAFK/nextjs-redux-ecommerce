import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import { addToCart, increaseAmount } from '../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../styles/Product.module.css'

export default function Product({ product, id, category, image, price, title, notify }) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)

    function onClickAddToCart(product){
        const cartId = cart.map(cartItem => cartItem.id)

        if (cartId.includes(product.id)) {
            dispatch(increaseAmount(product.id))
            notify()
        } 
        else {
            const cartItem = {...product, amount: 1}
            dispatch(addToCart(cartItem))
        }
    }

    return (
        <div className={styles.product}>
            <Link href={`/product/${id}`}>
                <div className={styles.imgWrapper}>
                    <Image src={image} alt={title} layout="fill" objectFit="contain" />
                </div>
            </Link>
            <Link href={`/product/${id}`}>
                <div className={styles.productInfo}>
                    <h3>{title}</h3>
                    <p>price: {price}$</p>
                    <p>category: {category}</p>
                </div>
            </Link>
            <div className={styles.btnContainer}>
                <button onClick={() => onClickAddToCart(product)} className={styles.btn}><FaCartPlus className={styles.icon} /> Add to cart</button>
            </div>
        </div>
    )
}
