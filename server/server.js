const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const postCharge = require('./stripeController/stripe')
require('dotenv').config()

const app = express()
const router = express.Router()
const port = process.env.PORT || 3001

router.post('/stripe/charge', postCharge)
router.all('*', (_, res) =>
    res.json({ message: 'please make a POST request to /stripe/charge' })
)
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//CORS bypass
app.use(function(req, res, next) {
  //must be included these first two
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
next();
});
app.use('/api', router)
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
})

app.listen(port, () => console.log(`server running on port ${port}`))