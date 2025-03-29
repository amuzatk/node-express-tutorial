const { BadRequestError } = require('../errors');
const User = require('../models/User');
const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcryptjs');

const login = (req,res)=>{
    res.send("Login User")
}

const register = async (req,res)=>{
    try {
    console.log(req.body,'===')
    // const {name, email, password} = req.body;
    // if(!name || !email || !password){
    //     throw new BadRequestError('Please provide name, emaail, and password')
    // }
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({msg:"Register User", data: user}) 
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: 'Faile to create a user'})
    }
}

module.exports = {login, register}