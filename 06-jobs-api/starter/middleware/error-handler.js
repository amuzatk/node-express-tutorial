const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleware


// const { StatusCodes } = require('http-status-codes')
// const errorHandlerMiddleware = (err, req, res, next) => {
//   let customError = {
//     // set default
//     statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
//     msg: err.message || 'Something went wrong try again later',
//   }

//   // if (err instanceof CustomAPIError) {
//   //   return res.status(err.statusCode).json({ msg: err.message })
//   // }

//   if (err.name === 'ValidationError') {
//     customError.msg = Object.values(err.errors)
//       .map((item) => item.message)
//       .join(',')
//     customError.statusCode = 400
//   }
//   if (err.code && err.code === 11000) {
//     customError.msg = `Duplicate value entered for ${Object.keys(
//       err.keyValue
//     )} field, please choose another value`
//     customError.statusCode = 400
//   }
//   if (err.name === 'CastError') {
//     customError.msg = `No item found with id : ${err.value}`
//     customError.statusCode = 404
//   }

//   return res.status(customError.statusCode).json({ msg: customError.msg })
// }

// module.exports = errorHandlerMiddleware




// // AI generated code
// // const { StatusCodes } = require('http-status-codes');

// // const errorHandlerMiddleware = (err, req, res, next) => {
// //     let customError = {
// //         statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
// //         msg: err.message || 'Something went wrong. Please try again later.',
// //     };

// //     // Handle MongoDB duplicate key error (E11000)
// //     if (err.code && err.code === 11000) {
// //         customError.statusCode = StatusCodes.BAD_REQUEST;
// //         customError.msg = `This email is already registered. Please log in or use a different email.`;
// //     }

// //     // Handle Mongoose validation errors
// //     if (err.name === 'ValidationError') {
// //         customError.statusCode = StatusCodes.BAD_REQUEST;
// //         customError.msg = Object.values(err.errors)
// //             .map((item) => item.message)
// //             .join(', ');
// //     }

// //     // Handle incorrect ObjectId errors (e.g., when querying by ID)
// //     if (err.name === 'CastError') {
// //         customError.statusCode = StatusCodes.BAD_REQUEST;
// //         customError.msg = `Invalid ID format: ${err.value}`;
// //     }

// //     res.status(customError.statusCode).json({ msg: customError.msg });
// // };

// // module.exports = errorHandlerMiddleware;

