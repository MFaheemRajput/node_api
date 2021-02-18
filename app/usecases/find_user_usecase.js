const findUserUsecase = require('./find_user_usecase');

module.exports = async function(user) {
    if(!user) {
        return error('Invalid user data');
    }
    var result = await findUserUsecase(user);
    // check if user already exist in db
    return result;

}
