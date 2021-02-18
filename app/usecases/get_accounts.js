const { getAccounts } = require('../datasource/index');

async function getAccountsUsecase() {

    const result = await getAccounts();

    return result;

}

module.exports =  {
    getAccountsUsecase,
}
