import React, { useState } from 'react'
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
} from 'react-stripe-elements'
import axios from 'axios'
import services from '../../../AirtableService'
import constants from '../../../config/consts'
import './Checkout.css'

const CheckoutForm = ({ stripe, receipt_email, pages, designLink,...props }) => {
    const [receiptUrl, setReceiptUrl] = useState('')
    const [error, setError] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        stripe.createToken()
            .then(({ token }) => {
                return axios.post(window.CHARGE_URL, {
                    amount: 200 * pages,
                    source: token.id,
                    receipt_email
                })
            }).then(order => {
                let date = new Date()
                services.addRecords([
                    {
                        "fields": {
                            [`${window.FIELD_1}`]: receipt_email,
                            [`${window.FIELD_2}`]: pages,
                            [`${window.FIELD_3}`]: designLink,
                            [`${window.FIELD_4}`]: date.toUTCString(),
                        }
                    }
                ],()=>{
                    console.log("tttttttttttttttttttttttttttt")
                    props.close(true)})
                // setReceiptUrl(order.data.charge.receipt_url)
            }).catch(err => {
                // err.response && err.response.data && err.response.data.message && setError(err.response.data.message)
            })
    }
    if (receiptUrl) {
        return (
            <div className="success">
                <h2>Payment Successful!</h2>
                <a href={receiptUrl}>View Receipt</a>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error">
                <h4>{error}</h4>
            </div>
        )
    }

    return (
        <div className="checkout-form">
            <p>Amount: ${200 * pages}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Card details
              <CardNumberElement />
                </label>
                <label>
                    Expiration date
              <CardExpiryElement />
                </label>
                <label>
                    CVC
              <CardCVCElement />
                </label>
                <button type="submit" className="order-button">
                    Pay
            </button>
            </form>
        </div>
    )
}

export default injectStripe(CheckoutForm)