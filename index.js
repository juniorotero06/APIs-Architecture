const container = require("./src/startup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => server.start())
  .catch(console.log);
