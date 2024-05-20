const mongoose = require('mongoose');

// Define the schema with validations
const postSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Define the model
const postModel = mongoose.model('blogpost', postSchema);

module.exports = postModel;
