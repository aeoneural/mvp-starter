var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database : 'addresses'
});
// connection.query('INSERT INTO items (name) values( programming )');

var selectAll = function(callback) {
  connection.query('SELECT * FROM addressTable', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var fetchData = function(input, callback) { 
  // input = input || 'San Francisco'
  connection.query(`select * from addressTable where addressTable.address = '${input}' `, function(err, results, fields){ 
    if(err) { 
      console.log("error ---> ", err)
      callback(err, null);
    } else { 
      console.log("results---->", results)
      // callback(null, results);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.fetchData = fetchData;
