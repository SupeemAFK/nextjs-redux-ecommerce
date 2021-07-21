import React from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//comnponents
import Product from '../components/Product'

export default function Home(props) {

  function notify() {
    toast("Amount has been increased!")
  }

  return (
    <div>
      <ToastContainer />
      <div className={styles.productContainer}>
        {props.products.map(product => <Product key={product.id} product={product} {...product} notify={notify} />)}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://fakestoreapi.com/products')
  const products = response.data

  return {
    props: {
      products
    }
  }
}