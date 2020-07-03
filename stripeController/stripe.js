const stripeObj = require('stripe')
const STRIPE_SECRET_KEY = require('../client/build/config')
async function postCharge(req, res) {
    try {
        const { amount,source,receipt_email} = req.body
        let stripe = stripeObj(process.env.SECRET_KEY)
        const charge = await stripe.charges.create({
            currency: 'eur',
            amount: amount*100,
            source: source,
            receipt_email: receipt_email
        })

        if (!charge) throw new Error('charge unsuccessful')

        res.status(200).json({
            message: 'charge posted successfully',
            charge
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = postCharge