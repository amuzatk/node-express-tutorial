const {CustomAPIError} = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) =>{
    if(err instanceof CustomAPIError){//throws this when id is valid (24 char) but not found in the DB
        return res.status(err.statusCode).json({msg: err.message})
    }
    // console.log(err);
    // return res.status(err.status).json({msg: err.message});
    return res.status(500).json({msg: `Something went wrong, please try again later`});//when id isn't valid (not 24 char)
}

module.exports = errorHandlerMiddleware;