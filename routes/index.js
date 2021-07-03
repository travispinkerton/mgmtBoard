const apiRouter = require('express').Router();
const { usersRouter } = require('./users');

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    message: "healthy!"
  })
})

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
