module.exports = {
    PORT: process.env.PORT || 8080,
    DB: {
      URI: 'mongodb+srv://admin:FrRw6ybF76j6cmz@cluster0.ehmed.mongodb.net',
      DEBUG: true,
      OPTIONS: {
          ssl: true,
          authSource: 'admin',
          autoIndex: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          dbName: 'Node_Api',
      },
    },
}
