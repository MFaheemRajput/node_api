const AccountDBModel = require('../entities/account');

module.exports = async function(email) {

   const result = await AccountDBModel.findOne({email});

   return result;
};
