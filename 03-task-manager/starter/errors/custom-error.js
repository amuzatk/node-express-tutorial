class CustomAPIError extends Error{//extends JS Error
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg, statusCode);
}

module.exports = {CustomAPIError, createCustomError};