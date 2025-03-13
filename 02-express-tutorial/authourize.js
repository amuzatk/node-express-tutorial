const authorize = (req, res, next) => {
  const {user} = req.query;
  if(user === "kazmatics"){
    req.user= {name: "Kazmatics", id:1};
    next();
  } else {
    res.status(401).send("Unauthirized");
  }
}

module.exports = authorize;