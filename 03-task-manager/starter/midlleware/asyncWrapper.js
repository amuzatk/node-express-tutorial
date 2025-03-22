const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error)//next() is express built-in error handler which our custom handler will override
        }
    }
}

module.exports = asyncWrapper;