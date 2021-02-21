const UserDBModel = require('../entities/user');

module.exports = async function(user, accountInfo) {
   const result = await UserDBModel.find({});
   return result;
};
