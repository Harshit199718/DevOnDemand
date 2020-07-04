const stripeObj = require('stripe')
// const STRIPE_SECRET_KEY = require('../client/build/config')
async function postCharge(req, res) {
    try {
        const { amount,pageNumbers,url} = req.body
        console.log("process.env.SECRET_KEY",process.env.SECRET_KEY)
        let stripe = stripeObj(process.env.SECRET_KEY)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
              price_data: {
                currency: 'eur',
                unit_amount: amount*100,
                product_data: {
                    name: 'Design Pages',
                  },
              },
              quantity: pageNumbers,
            }],
            mode: 'payment',
            success_url: url+'/success',
            cancel_url: url+'/cancel',
          });
        // const charge = await stripe.charges.create({
        //     currency: 'eur',
        //     amount: amount*100,
        //     source: source,
        //     receipt_email: receipt_email
        // })

        if (!session) throw new Error('charge unsuccessful')

        res.status(200).json({
            // message: 'charge posted successfully',
            sessionId:session.id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = postCharge