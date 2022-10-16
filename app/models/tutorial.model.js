module.exports = mongoose => {
    const ObjectId = require('mongodb').ObjectId;
    //tutorial Schema
    var tutorialSchema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    );

    tutorialSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    //Post Schema
    var postSchema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    );
    postSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    //User Schema
    var userSchema = mongoose.Schema({
        id: ObjectId,
        firstname: { type: String, require: true },
        lastname: { type: String, require: true },
        username: { type: String, unique: true, require: true },
        password: { type: String, require: true },
        role: { type: [String], require: true }
    })

    //Question Schema
    var qnSchema = mongoose.Schema({
        id: ObjectId,
        question: { type: String, require: true },
        module_id: { type: ObjectId, ref: 'Module' }
    })

    //Answer Schema
    var ansSchema = mongoose.Schema({
        id: ObjectId,
        answer: String,
        question: { type: ObjectId, ref: 'Question' }
    })

    //Module Schema
    var modSchema = mongoose.Schema({
        id: ObjectId,
        name: { type: String, require: true }
    })

    //Role Schema
    var roleSchema = mongoose.Schema({
        id: ObjectId,
        role: { type: String, require: true }
    })

    const Tutorial = mongoose.model("tutorial", tutorialSchema);
    const Post = mongoose.model("post", postSchema);
    const User = mongoose.model('User', userSchema);
    const Question = mongoose.model('Question', qnSchema);
    const Answer = mongoose.model('Answer', ansSchema);
    const Module = mongoose.model('Module', modSchema);
    const Role = mongoose.model('Role', roleSchema);

    return {
        User: User,
        Question: Question,
        Answer: Answer,
        Module: Module,
        Role: Role,
        Post: Post,
        Tutorial: Tutorial,
    };

    /*
    >> `UserModel` is a "Model", a subclass of `mongoose.Model`.
    const UserModel = mongoose.model('User', new Schema({ name: String }));

    >> You can use a Model to create new documents using `new`:
    const userDoc = new UserModel({ name: 'Foo' });
    await userDoc.save();

    >> You also use a model to create queries:
    const userFromDb = await UserModel.findOne({ name: 'Foo' });
    */

};