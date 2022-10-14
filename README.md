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