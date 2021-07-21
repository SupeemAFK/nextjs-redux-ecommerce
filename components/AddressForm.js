import React from 'react'

import styles from '../styles/AddressForm.module.css'

//components
import Select from './Select'

export default function AddressForm() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label>Phone Number</label>
                    <input name="phone" type="text" className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label>Company</label>
                    <input name="company" type="text" className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label>Country</label>
                    <div className={styles.input}>
                        <Select />
                    </div>
                </div>
                
                <div className={styles.inputContainer}>
                    <label>State</label>
                    <input name="state" type="text" className={styles.input}/>
                </div>
                
                <div className={styles.inputContainer}>
                    <label>City</label>
                    <input name="city" type="text" className={styles.input}/>
                </div>
                
                <div className={styles.inputContainer}>
                    <label>Address</label>
                    <textarea name="address" type="text" className={styles.input}/>  
                </div>
                
                <div className={styles.inputContainer}>
                    <label>Zip code</label>
                    <input name="zip-code" type="text" className={styles.input}/>
                </div>
            </form>
        </div>
    )
}
