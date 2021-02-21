const { getUsers } = require('../datasource/index');

async function getUsersUsecase() {

    const result = await getUsers();

    return result;

}

module.exports =  {
    getUsersUsecase,
}
