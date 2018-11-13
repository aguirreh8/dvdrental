const pg = require("pg");
const connectionString = "postgres://postgres:player247508@localhost:5432/dvdrental";

const client = new pg.Client(connectionString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  client.query("SELECT * FROM actor LIMIT 5", function(err, result) {
  	if(err) {
  		return console.error("error running query", err);
  	}
  	console.log(result.rows);
  	client.end();
  });

});
