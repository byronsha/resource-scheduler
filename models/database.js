var pg = require("pg");
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:cheese@localhost:5432/resourceapp';

var client = new pg.Client(connectionString);

client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

client.connect();
var sql =
  'CREATE TABLE users('
  + 'id SERIAL PRIMARY KEY,'
  + 'email VARCHAR(40) NOT NULL,'
  + 'name VARCHAR(40),'
  + 'nickname VARCHAR(40),'
  + 'given_name VARCHAR(40),'
  + 'family_name VARCHAR(40),'
  + 'gender VARCHAR(10),'
  + 'locale VARCHAR(10),'
  + 'picture VARCHAR(120),'
  + 'auth0_id VARCHAR(120),'
  + 'date_created TIMESTAMP,'
  + 'date_updated TIMESTAMP)';

var query = client.query(sql);
query.on('end', function() { client.end(); });
