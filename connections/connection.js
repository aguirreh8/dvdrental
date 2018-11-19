// Use pg dependency to connect to PostgreSQL database
const pg = require("pg");
// Connection cofiguration variables for simple modificatoins
const username = "postgres";
const password = "mypostgresserver";
const server = "localhost";
const port = "5432";
const database = "dvdrental";
// Complete connection string
const connectionString = `postgres://${username}:${password}@${server}:${port}/${database}`;

const client = new pg.Client(connectionString);

// Connect to database
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  console.log(`Connected to PostrgreSQL PORT:${port} DB:${database}`);
});

module.exports = client;