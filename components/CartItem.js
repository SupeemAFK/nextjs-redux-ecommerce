import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartArrowDown } from 'react-icons/fa'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { deleteFromCart, increaseAmount, decreaseAmount } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'

import styles from '../styles/CartItem.module.css'

export default function CartItem({ id, amount, category, image, price, title }) {
    const dispatch = useDispatch()

    function checkDecreaseAmount(id) {
        if (amount === 1) {
            dispatch(deleteFromCart(id))
        }
        else {
            dispatch(decreaseAmount(id))
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
                    <p>price: {(price * amount).toFixed(2)}$</p>
                    <p>category: {category}</p>
                </div>
            </Link>
            <div className={styles.amount}>
                <button onClick={() => checkDecreaseAmount(id)}><IoMdArrowDropleft /></button>
                <h3>{amount}</h3>
                <button onClick={() => dispatch(increaseAmount(id))}><IoMdArrowDropright /></button>
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => dispatch(deleteFromCart(id))} className={styles.btn}><FaCartArrowDown className={styles.icon} /> Remove from cart</button>
            </div>
        </div>
    )
}
