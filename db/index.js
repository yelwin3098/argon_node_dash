const Knex = require('knex');
const knexConfig = require('./knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);
knex.raw("SELECT 1").then(() => {
    console.log("MySql connected");
})
.catch((e) => {
    console.log("MySql not connected");
    console.error(e);
})

module.exports = knex;
