// Update with your config settings.
require('dotenv').config();

module.exports = {
    test: {
        client: 'mysql2',
        connection: {
            database: process.env.DB_DATABASE,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
    },
    development: {
        client: 'mysql2',
        connection: {
            database: process.env.DB_DATABASE,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        seeds: {
            directory: `${__dirname}/seeds`,
        },
    },
};
