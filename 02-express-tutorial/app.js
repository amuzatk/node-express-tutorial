// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')
// //  req => middleware => res
// app.use([logger, authorize])
// // api/home/about/products
// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })


const express = require('express');
const {products } = require('./data');
const logger = require('./logger')
const authorize = require('./authorize')

const app = express();
app.use([logger, authorize])

app.get('/api/v1/middle', (req,res)=>{

res.send('testing middleware')

})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})