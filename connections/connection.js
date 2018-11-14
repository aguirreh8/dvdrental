// Use pg dependency to connect to PostgreSQL database
const pg = require("pg");
const connectionString = "postgres://postgres:player247508@localhost:5432/dvdrental";

const client = new pg.Client(connectionString);

// Connect to database
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  console.log("Connected to PostrgreSQL PORT:5432 DB:dvdrental");
});

module.exports = client;