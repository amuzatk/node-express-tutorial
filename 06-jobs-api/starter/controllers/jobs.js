const Job = require('../models/Job');



const createJob = (req,res)=>{
    // res.send("Create Job")
    res.json(req.body)
}

const getJobs = (req,res)=>{
    res.send("Get Jobs")
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