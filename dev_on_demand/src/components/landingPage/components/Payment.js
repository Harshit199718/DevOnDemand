import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey={window.STRIPE_PUBLISHABLE_KEY}>
      <Elements>
        <CheckoutForm {...props}/>
      </Elements>
    </StripeProvider>
  )
}

export default Checkout