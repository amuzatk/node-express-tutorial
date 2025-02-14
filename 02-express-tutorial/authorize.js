
const authorize = (req, res, next) => {
// console.log('authoise')
const {user} = req.query;
if(user === 'john'){
    req.user = {name: 'john', id:3 }
next()
} else {
    res.status(401).send('Unauthorise')
}
}

module.exports = authorize