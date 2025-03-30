const { BadRequestError } = require('../errors');
const User = require('../models/User');
const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcryptjs');

const login = (req,res)=>{
    res.send("Login User")
}

const register = async (req,res)=>{
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({msg:"Register User", data: user}) 
}

module.exports = {login, register}