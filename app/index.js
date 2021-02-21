const express = require("express");
const path = require("path");
const parser = require("body-parser");
const { initDB } = require("./utils/db");
const CONFIG =  require('./config')
const accountRouter =  require('./routes/account_routes')
const accountsRouter =  require('./routes/accounts')
const usersRouter =  require('./routes/users')

initDB();

const server = express();

server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());

server.use('/open_account', accountRouter)
server.use('/accounts', accountsRouter)
server.use('/users', usersRouter)
server.use('/', express.static(path.join(__dirname,'./public')))
server.use('/all_users', express.static(path.join(__dirname,'./public/user.html')))

server.listen(CONFIG.PORT, () => {
  console.log(`listening on *: ${CONFIG.PORT}`);
});
