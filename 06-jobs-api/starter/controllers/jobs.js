const Job = require('../models/Job');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, NotFoundError} = require('../errors')

const createJob = async (req,res)=>{
    // console.log(req.body,'body=');
    // console.log(req.user,'user==');
    // console.log(req.user.userId,'user.userId===');
    // req.body.createdby = req.user.userId;
    const newJob = await Job.create({
        ...req.body,
        createdBy: req.user.userId//req.user is within the auth middleware
    })
    res.status(StatusCodes.CREATED).json({msg:'Job Created Successfully', data: newJob})
}

const getJobs = async (req,res)=>{//fetch jobs of a user
    // console.log(req.body,'jobs==')
    // console.log(req.user,'req.user==')
    const jobs = await Job.find({createdBy:req.user.userId}).sort('createdAt');
    res.status(StatusCodes.OK).json({msg:'User Jobs Fetched Successfully', data: jobs, count: jobs.length})
}

const getJob = (req,res)=>{
    res.send("Get Job single")
}

const deleteJob = (req,res)=>{
    res.send("Delete Job")
}

const updateJob = (req,res)=>{
    res.send("Update Job")
}

module.exports = {createJob, getJobs, getJob,deleteJob,updateJob}