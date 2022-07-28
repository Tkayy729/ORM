const { Model } = require("objection");
const Knex = require("knex");

//initialize knex connection to the database

const knex = Knex({
    client: "pg",
    connection:{
        host:"localhost",
        user: "postgres",
        password: "postgres",
        database: "church_db"
    }
})

// create knex instance from the objection model
Model.knex(knex);

module.exports = knex;