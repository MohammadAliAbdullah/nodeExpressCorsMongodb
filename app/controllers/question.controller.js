const db = require("../models");
const Questions = db.collections.Question;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.question) {
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    // Create a Tutorial
    const question = new Questions({
        question: req.body.question,
        module_id: req.body.module_id
    });

    // Save Tutorial in the database
    question.save(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};