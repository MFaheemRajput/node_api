const express = require("express");
const parser = require("body-parser");
const { initDB } = require("./utils/db");
const CONFIG =  require('./config')
const accountRouter =  require('./routes/account_routes')
const accountsRouter =  require('./routes/accounts')

initDB();

const server = express();

server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());

server.use('/open_account', accountRouter)
server.use('/accounts', accountsRouter)

server.listen(CONFIG.PORT, () => {
  console.log(`listening on *: ${CONFIG.PORT}`);
});
