const mongoose = require('mongoose');

const { Schema } = mongoose;

const modelName = 'Users';

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
    isActive: {
        type: Boolean
    },
}, opts);


var DbModel = mongoose.model(modelName, DbSchema, modelName);

module.exports = DbModel


// var user = {
//   name :"",
//   email:"",
//   id   : 0,
//   make : function(name,email) {
//     this.name = name;
//     this.email = email;
//     return this;
//   }
// };

// module.exports = {

//     user

// }