 const AccountDBModel = require('../entities/account');

module.exports = async function(user, accountInfo) {
    if(!user) {
        return error('Invalid user data');
    }
    if (!accountInfo){
        return error('Invalid account data');
    }

    const newAccount = new  AccountDBModel({
        username: user.username,
        email: user.email,
        title: accountInfo.accountType
    })
    const result = await newAccount.save();

    return result;
};
