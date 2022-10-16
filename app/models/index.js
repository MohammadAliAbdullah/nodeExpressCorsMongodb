const dbConfig = require("../config/db.config.js"); // get database url.
const mongoose = require("mongoose"); // get mongoose
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// create schema and collection for project.
db.tutorials = require("./tutorial.model.js")(mongoose);
// console.log(db.tutorials);
module.exports = db;