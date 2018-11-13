const pg = require("pg");
const connectionString = "postgres://postgres:player247508@localhost:5432/dvdrental";

const client = new pg.Client(connectionString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  console.log("Connected to PostrgreSQL PORT:5432 DB: dvdrental");
});

module.exports = client;