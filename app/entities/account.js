const mongoose = require('mongoose');

const { Schema } = mongoose;

const modelName = 'User';

const opts = {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
};

const DbSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    title: {
        type: String
    }
}, opts);


var DbModel = mongoose.model(modelName, DbSchema, modelName);

module.exports = DbModel
