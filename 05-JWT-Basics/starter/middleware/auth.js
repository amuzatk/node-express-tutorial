const jwt = require('jsonwebtoken')
// const CustomAPIError = require("../errors/custom-error");
const UnauthenticatedError = require("../errors")

const authorizationMiddleWare = (req, res, next)=>{
    const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer')){
      throw new UnauthenticatedError("No Token");
  }
  
  const token = authHeader.split(" ")[1];

  try {
//verify the token using jwt
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {id, username} = decoded;
    req.user = {id, username};

    next();
} catch (error) {
    throw new UnauthenticatedError("Not authorized to access this resource");
}

}

module.exports = authorizationMiddleWare;