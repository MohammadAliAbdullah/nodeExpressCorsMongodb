module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const posts = require("../controllers/post.controller.js");
  const questions = require("../controllers/question.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tutorials/", tutorials.create).get("/tutorials/", tutorials.findAll).delete("/tutorials/", tutorials.deleteAll);
  router.get("/tutorials/:id", tutorials.findOne).put("/tutorials/:id", tutorials.update).delete("/tutorials/:id", tutorials.delete);
  router.get("/published", tutorials.findAllPublished);
  // post route
  router.post("/posts/", posts.create);
  // post route
  router.post("/questions/", questions.create);

  /*
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);
  */
  app.use('/api', router);
};