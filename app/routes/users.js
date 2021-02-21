const express = require("express");
const { user, account } = require('../entities/index');
const { getUsersUsecase } = require('../usecases/index');

const router = express.Router();

router.get('/', async (req, res) => {
    // we will create the note here
    const result = await getUsersUsecase();
    console.log(result)
    res.send(result);

});

module.exports = router
