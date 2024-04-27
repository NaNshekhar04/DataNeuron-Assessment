const apiTimeExecuter = (req, res, next) => {
    req.startTime = Date.now();
    next();
};

module.exports = apiTimeExecuter;