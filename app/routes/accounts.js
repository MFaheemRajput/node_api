const express = require("express");
const { user, account } = require('../entities/index');
const { getAccountsUsecase } = require('../usecases/index');

const router = express.Router();

router.get('/', async (req, res) => {
    // we will create the note here
    const result = await getAccountsUsecase();
    console.log(result)
    res.send(result);

});

module.exports = router
