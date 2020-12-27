const env = require('dotenv');
env.config();
module.exports = {
    DB_USER : process.env.MONGO_DB_USER,
    DB_PASS:process.env.MONGO_DB_PASS,
    DB_NAME:process.env.MONGO_DB_NAME,
    PORT : process.env.PORT || 4000,
    JWT_Secret : process.env.JWT_Secret
}