const mongoose = require('mongoose');

const { Schema } = mongoose;

const modelName = 'Account';

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
        type: String,
    },
    title: {
        type: String
    },
    type: {
        type: Number
    },
    isActive: {
        type: Boolean
    },
    balance: {
        type: Number
    }
}, opts);


var DbModel = mongoose.model(modelName, DbSchema, modelName);

module.exports = DbModel
