import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const { cart } = useSelector(state => state.cart)

    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <div className={styles.imgWrapper}>
                    <Image src="https://weproperty.com.au/wp-content/uploads/2020/08/dummy-logo-5b.png" alt="" objectFit="contain" layout="fill" priority />
                </div>
            </Link> 
            <Link href="/Cart">
                <button className={styles.cartbtn}>
                    <div className={styles.cartItems}>{cart.length}</div> 
                    <FaShoppingCart className={styles.cartIcon} />
                </button>
            </Link>
        </div>
    )
}
