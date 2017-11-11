var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/addresses', function (req, res) {

  console.log("This is the req", req.query.city);

  items.fetchData(req.query.city, function(err, data){

    if(err) { 
      res.sendStatus(500);
    } else { 
      res.send(data);
    }
  })

  // items.selectAll(function(err, data) {
  // 	// console.log("Err: ", err);
  // 	console.log("server/index.js data -> ", data)
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     console.log("This is the data in server ", data)
  //     res.send(data);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

