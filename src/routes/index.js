const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");

module.exports = function ({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes }) {
  const router = express.Router();
  const apiRouter = express.Router();

  apiRouter.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRouter.use("/home", HomeRoutes);
  apiRouter.use("/user", UserRoutes);
  apiRouter.use("/idea", IdeaRoutes);
  apiRouter.use("/comment", CommentRoutes);

  router.use("/v1/api", apiRouter);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
