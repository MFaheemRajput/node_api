const { createAccount } = require('../datasource/index');

async function createAccountUsecase(user, accountInfo) {

    if(!user) {
        return error('Invalid user data');
    }
    if (!accountInfo){
        return error('Invalid account data');
    }
    const checkExistingUser = await createAccount(user, accountInfo);
    const result = await createAccount(user, accountInfo);
    // check if user already exist in db

    return result;

}

module.exports =  {
    createAccountUsecase,
}
