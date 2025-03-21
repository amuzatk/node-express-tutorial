const Task = require("../model/Task");
const asyncWrapper = require("../midlleware/asyncWrapper");
const {createCustomError, CustomAPIError} = require("../errors/custom-error");
const mongoose = require("mongoose");

const getAllTasks = asyncWrapper( async (req,res)=>{
        const tasks = await Task.find({});
        res.status(200).json({tasks});  
        // res.status(200).json({success: true, data: tasks});  
});

const getTask = asyncWrapper( async (req,res, next)=>{
        const {id: taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        if(!task){
            return next(createCustomError(`No task with id : ${taskId}`, 404));
        }
        res.status(200).json({task});
});

// const getTask = async (req, res, next) => {
//     try {
//         const { id: taskId } = req.params;

//         // Validate if taskId is a valid MongoDB ObjectId
//         if (!mongoose.Types.ObjectId.isValid(taskId)) {
//             return res.status(400).json({ msg: `Invalid task ID: ${taskId}` });
//         }

//         const task = await Task.findOne({ _id: taskId });

//         // if (!task) {
//         //     return res.status(404).json({ msg: `No task with id: ${taskId}` });
//         // }
//         if(!task){
//             return next(createCustomError(`No task with id : ${taskId}`, 404));
//         }

//         res.status(200).json({ task });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });  // Return only the error message
//     }
// };


const createTask = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).json({task});
});

const deleteTasks = asyncWrapper( async (req,res, next)=>{
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        if(!task){
            return next(createCustomError(`No task with id : ${taskId}`, 404));
            // res.status(404).json({msg: `No task with id : ${taskId}`});
        }
        res.status(200).json({task});
        // res.status(200).json({task: null, status: "Success"});
        // res.status(200).send();
});

const updateTask = asyncWrapper( async (req,res, next)=>{
        const {id: taskId} = req.params;

        const task = await Task.findOneAndUpdate(
            {_id: taskId},//tells moogoose to find the task with this id
            req.body,//tells mongoose to update the name of the task
            {new: true, runValidators: true}//tells mongoose to return the updated task and run the validators
        )

        if(!task){
            return next(createCustomError(`No task with id : ${taskId}`, 404));
        }

    res.status(200).json({task});
});

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTasks
}





////b4 DRY approach for try..catch
// const Task = require("../model/Task");
// // const mongoose = require("mongoose");

// const getAllTasks = async (req,res)=>{
//     try {
//         const tasks = await Task.find({});
//         res.status(200).json({tasks});  
//         // res.status(200).json({success: true, data: tasks});  
//     } catch (error) {
//         res.status(500).json({msg: error});
//         // res.status(500).json({success: false , msg: error});
//     }
// };

// const getTask = async (req,res)=>{
//     try {
//         const {id: taskId} = req.params;
//         const task = await Task.findOne({_id:taskId});
//         if(!task){
//             return res.status(404).json({msg: `No task with id : ${taskId}`});
//         }
//         res.status(200).json({task});
        
//     } catch (error) {
//         res.status(500).json({msg: error});//castError is thrown when invalid id is passed (length is not 24)
//     }
// };

// // const getTask = async (req, res) => {
// //     try {
// //         const { id: taskId } = req.params;

// //         // Validate if taskId is a valid MongoDB ObjectId
// //         if (!mongoose.Types.ObjectId.isValid(taskId)) {
// //             return res.status(400).json({ msg: `Invalid task ID: ${taskId}` });
// //         }

// //         const task = await Task.findOne({ _id: taskId });

// //         if (!task) {
// //             return res.status(404).json({ msg: `No task with id: ${taskId}` });
// //         }

// //         res.status(200).json({ task });
// //     } catch (error) {
// //         res.status(500).json({ msg: error.message });  // Return only the error message
// //     }
// // };


// const createTask = async (req,res)=>{
//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({task});
//     } catch (error) {
//       res.status(500).json({msg: error});
//     }
// };


// const deleteTasks = async (req,res)=>{
//     try {
//         const {id: taskId} = req.params;
//         const task = await Task.findOneAndDelete({_id: taskId});
//         if(!task){
//             res.status(404).json({msg: `No task with id : ${taskId}`});
//         }
//         res.status(200).json({task});
//         // res.status(200).json({task: null, status: "Success"});
//         // res.status(200).send();
        
//     } catch (error) {
//         res.status(500).json({msg: error});
//     }
// };

// const updateTask = async (req,res)=>{
//     try {
//         const {id: taskId} = req.params;

//         const task = await Task.findOneAndUpdate(
//             {_id: taskId},//tells moogoose to find the task with this id
//             req.body,//tells mongoose to update the name of the task
//             {new: true, runValidators: true}//tells mongoose to return the updated task and run the validators
//         )
//     res.status(200).json({task});
        
//     } catch (error) {
//         res.status(500).json({msg: error});
//     }
// };

// module.exports = {
//     getAllTasks,
//     getTask,
//     createTask,
//     updateTask,
//     deleteTasks
// }