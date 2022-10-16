# node, Express, Cors & Mongodb CRUD Rest Api
Node.js, Express &amp; MongoDb: Build a CRUD Rest Api

### install node js modules:
> npm init
```
name: (nodeExpressCorsMongodb) 
version: (1.0.0) 
description: Node.js Restful CRUD API with Node.js, Express and MongoDB
entry point: (index.js) server.js
test command: 
git repository: 
keywords: nodejs, express,cors, mongodb, rest, api
author: Mohammad Ali Abdullah
license: (ISC)

Is this ok? (yes) yes
```
### install necessary modules: express, mongoose and cors. Run the command:
> npm install express mongoose cors --save

```
– import express and cors modules:

1. Express is for building the Rest apis
2. cors provides Express middleware to enable CORS with various options.
– create an Express app, then add body-parser (json and urlencoded) and cors middlewares using app.use() method. Notice that we set origin: http://localhost:8080.
– define a GET route which is simple for test.
– listen on port 8080 for incoming requests.

Now let’s run the app with command: node server.js.
```

### Configure MongoDB database & Mongoose

```
In the app folder, we create a separate config folder for configuration with db.config.js file like this:
```
> module.exports = {
>   url: "mongodb://localhost:27017/nodeExpressCorsMongodb"
> };

### Define Mongoose
```
We’re gonna define Mongoose model (tutorial.model.js) also in app/models folder in the next step.

Now create app/models/index.js with the following code:

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
Don’t forget to call connect() method in server.js:

...
const app = express();
app.use(...);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
```
###  Define the Mongoose Model
```
In models folder, create tutorial.model.js file like this:

module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};
```

### Define .env
> npm install dotenv --save

```
add require('dotenv').config() in the server.js

process.env.PORT
```