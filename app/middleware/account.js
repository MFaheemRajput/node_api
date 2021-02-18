const { findUser } = require('../datasource');

exports.checkIfUserExists = async function(req, res, next) {
    const result = await findUser(req.body.email);
    console.log(result);
    console.log('resultssss');
    if(!result) {
        // throw an error
        return res.status(400).send({
            status: 400,
            error: "USER DOES NOT EXISTS."
        });
    }
    next();
}
