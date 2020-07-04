import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js';
import Axios from 'axios';
const stripePromise = loadStripe(window.STRIPE_PUBLISHABLE_KEY);




const Checkout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const createCheckoutSession = () => {
    // event.preventDefault()
    return Axios.post(window.CHARGE_URL,{
      amount:200,
      pageNumbers:props.pages,
      url:window.location.href
    })
  }
  
  const handleClick = async (event) => {
    // Call your backend to create the Checkout Session—see previous step
    const { data:responseData } = await createCheckoutSession();
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId:responseData.sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  return (
    <button role="link" className="btn btn-primary" onClick={handleClick}>
      Checkout
    </button>
    // <StripeProvider apiKey={window.STRIPE_PUBLISHABLE_KEY}>
    //   <Elements>
    //     <CheckoutForm {...props}/>
    //   </Elements>
    // </StripeProvider>
  )
}

export default Checkout