
const getAllTasks = (req,res)=>{
    res.send("get all tasks");
};

const getTask = (req,res)=>{
    const {id} = req.params
    res.json({_id: id});
};

const createTask = (req,res)=>{
    res.json(req.body);
};

const updateTask = (req,res)=>{
    res.send("update task");
};

const deleteTasks = (req,res)=>{
    res.send("delete task");
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTasks
}