import React from 'react'
import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios' 
import { addToCart, increaseAmount } from '../../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../styles/ProductPage.module.css'

export default function ProductPage({ product }) {
    const dispatch = useDispatch()
    const { category, description, image, price, title} = product
    const { cart } = useSelector(state => state.cart)

    function notify() {
        toast("Amount has been increased!")
    }

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
            <ToastContainer />
            <div className={styles.imgWrapper}>
                <Image src={image} alt={title} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.productInfo}>
                <h1>{title}</h1>
                <h3>{category}</h3>
                <h3>{price}$</h3>
                <p>{description}</p>
                <div className={styles.btnContainer}>
                    <button onClick={() => onClickAddToCart(product)} className={styles.btn}><FaCartPlus className={styles.icon} /> Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export async function getStaticPaths() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data
    const paths = products.map(product => ({ params: {id: product.id.toString()} }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    const product = response.data

    return {
        props: {
            product
        }
    }
}