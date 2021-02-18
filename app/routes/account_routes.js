const express = require("express");
const { user, account } = require('../entities/index');
const { createAccountUsecase } = require('../usecases/index');
const { checkIfUserExists } = require('../middleware/account');

const router = express.Router();

router.post('/',
    checkIfUserExists,
    async (req, res) => {
    // we will create the note here
    const { uuid } = req.headers;
    const { userName, accountType } = req.body;
    console.log(req.body)
    console.log(accountType)
    if (!uuid || uuid.length == 0) {
        return res.status(400).send({
            status: 400,
            error: "No or invalid user uuid."
        });
    }
    if (!userName || userName.length == 0) {
        return res.status(400).send({
            status: 400,
            error: "No or invalid userName value."
        });
    }
    if (!accountType) {
        return res.status(400).send({
            status: 400,
            error: "No or invalid account type."
        });
    }
    const user = {
        uuid,
        userName
    }
    const accountInfo = {
        accountType,
        userName
    }
    console.log(user);
    console.log(accountInfo);
    const result = createAccountUsecase(user, accountInfo);
    res.send(result);

});

module.exports = router
