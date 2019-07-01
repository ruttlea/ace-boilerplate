/* eslint-disable */

if(process.env.CREATE_MIGRATION){
  require('dotenv').config({ path: '../.env' })
}

module.exports = {
    development: {
        client: process.env.DB_DIALECT,
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './db/migrations/',
            stub: './db/migrations.stub',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
    production: {
        client: process.env.DB_DIALECT,
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './db/migrations/',
        },
    },
};
