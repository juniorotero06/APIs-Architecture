const { createContainer, asClass, asValue, asFunction } = require("awilix");
// Services
const { HomeService } = require("../services");
//Controllers
const { HomeController } = require("../controllers");
//Models
const { User, Idea, Comment } = require("../models")
// Routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
// Config
const config = require("../config");
const app = require("./index");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  });

module.exports = container;
