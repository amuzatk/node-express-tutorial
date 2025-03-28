
// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard

const jwt = require('jsonwebtoken')
// const CustomAPIError = require("../errors/custom-error")
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body;
    //options for checking validation include
//1. mongoose validation - in the schema
//2. Joi - a library
//3. check in the controller - what we use here
    console.log(username, password,'===')
    if(!username || !password){
     throw new BadRequestError("Provide valid username and password")
    }

    //just for demo, normally provided by DB!!!!
    const id = new Date().getDate()
  
    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })

    res.status(200).send({msg: 'Logged-In Successfully', token})
    // const { username, password } = req.body
    // // mongoose validation
    // // Joi
    // // check in the controller
  
    // if (!username || !password) {
    //   throw new BadRequestError('Please provide email and password')
    // }
  
    // //just for demo, normally provided by DB!!!!
    // const id = new Date().getDate()
  
    // // try to keep payload small, better experience for user
    // // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    // const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    //   expiresIn: '30d',
    // })
  
    // res.status(200).json({ msg: 'user created', token })
  }

// const login = async (req, res) => {
//   const { username, password } = req.body
//   // mongoose validation
//   // Joi
//   // check in the controller

//   if (!username || !password) {
//     throw new BadRequestError('Please provide email and password')
//   }

//   //just for demo, normally provided by DB!!!!
//   const id = new Date().getDate()

//   // try to keep payload small, better experience for user
//   // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
//   const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })

//   res.status(200).json({ msg: 'user created', token })
// }

const dashboard = async (req, res) => {
    console.log(req.user,'user==');

const luckyNumber = Math.floor(Math.random() * 100);

res.status(200).json({
  msg: `Hello, ${req.user.username}  with id: ${req.user.id}`,
  secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
})

}

module.exports = {
  login,
  dashboard,
}
