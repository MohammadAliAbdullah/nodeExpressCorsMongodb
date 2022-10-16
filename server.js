require('dotenv').config()
// Express is for building the Rest apis
const express = require("express");
// cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
// origin 
var corsOptions = {
    origin: "http://localhost:"+ PORT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to node, express application." });
// });
const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
console.log(process.env.PORT);
require("./app/routes/tutorial.routes")(app);
// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});