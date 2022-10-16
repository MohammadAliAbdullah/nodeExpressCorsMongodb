module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const posts = require("../controllers/post.controller.js");
    const questions = require("../controllers/question.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/tutorials/", tutorials.create);  
    router.post("/posts/", posts.create);  
    router.post("/questions/", questions.create);  
    
    app.use('/api', router);
  };