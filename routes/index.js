const userRouter = require("./user");
const farmRouter = require("./farm");
const soilRouter = require("./soil");

const init = (app) => {
  app.use(userRouter);
  app.use(farmRouter);
  app.use(soilRouter);
};

module.exports = init;