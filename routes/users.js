var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', 'config'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
		title: 'Resource App'
	});
});

// CREATE action:
router.post('/api/v1/users', function(req, res) {
	var results = [];

	var data = {
    email: req.body.email,
    name: req.body.name,
    nickname: req.body.nickname,
    given_name: req.body.given_name,
    family_name: req.body.family_name,
    gender: req.body.gender,
    locale: req.body.locale,
    picture: req.body.picture,
    auth0_id: req.body.user_id,
    date_created: req.body.created_at,
    date_updated: req.body.updated_at
  };

	pg.connect(connectionString, function(err, client, done) {
		if (err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err });
		}

    var sql =
      'INSERT INTO users('
      + 'email,'
      + 'name,'
      + 'nickname,'
      + 'given_name,'
      + 'family_name,'
      + 'gender,'
      + 'locale,'
      + 'picture,'
      + 'auth0_id,'
      + 'date_created,'
      + 'date_updated'
      + ')'
      + 'values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';

		client.query(sql,
      [
        data.email,
        data.name,
        data.nickname,
        data.given_name,
        data.family_name,
        data.gender,
        data.locale,
        data.picture,
        data.auth0_id,
        data.date_created,
        data.date_updated
      ]
    );

		var query = client.query('SELECT * FROM users ORDER BY id ASC;');

		query.on('row', function(row) {
			results.push(row);
		})

		query.on('end', function() {
			done();
			return res.json(results);
		})
	})
});

module.exports = router;
