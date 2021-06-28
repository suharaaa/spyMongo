const userRouter = require("./user");

const init = (app) => {
  app.use(userRouter);

};

module.exports = init;