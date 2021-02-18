const AccountDBModel = require('../entities/account');

module.exports = async function(user, accountInfo) {

   const result = await AccountDBModel.find({});

   return result;
};
