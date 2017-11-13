var mysql = require('mysql');
var request = require('request')
const config = require('../config.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database : 'mvpmap'
});
// connection.query('INSERT INTO items (name) values( programming )');
var tempdata = []
var populateData = (inputQuery) => { 
  console.log(' I am fetching data from API :) ')
  // var options = { 
  //   lat: 37.7979602, 
  //   lng: -122.4309591
  // }

  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=yoga+in+san+francisco&key=AIzaSyAkFklzzdrlblW1X35DcivZjOoaQQadheU

  // request({
  //   method: 'GET',
  //   url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + inputQuery + '&key=' + config.key, 
  // }, 
  // function(error, response) { 
  //   if(error) { 
  //     console.log("Google maps API error: ", error) } else { 
  //       var allLoc = JSON.parse(response.body).results;
  //       // console.log("data play: ", JSON.parse(response.body).results);
  //       // console.log('geo:', JSON.parse(response.body).results[0].rating)
  //       // console.log('length: ', JSON.parse(response.body).results[1].rating)
  //       var argument = {}
  //       for(var i = 0; i < allLoc.length; i++) { 

  //         argument ['id'] = allLoc[i]['place_id']
  //         var add = allLoc[i].formatted_address.split(',')
  //         argument ['street'] = add[0]
  //         argument ['city'] = add[1]
  //         argument ['zipState'] = add[2]
  //         argument ['country'] = add[3]
          

  //         argument ['name'] = allLoc[i].name
  //         argument ['lat'] = allLoc[i].geometry.location.lat
  //         argument ['lng'] = allLoc[i].geometry.location.lng
  //         // argument ['open_now'] = allLoc[i]['opening_hours']
  //         argument ['rating'] = allLoc[i].rating === undefined ? 0 : allLoc[i].rating


  //         console.log('each entry: ', argument)
  //         saveOneEntry(argument['id'], argument['street'], argument['city'], argument['zipState'], argument['country'], argument['name'], argument['lat'], argument['lng'], argument['rating'])
  //       }
  //     } 
  //   }
  // )
}

// var saveOneEntry = function(id, street, city, zipState, country, name, lat, lng, rating) { 
//   connection.query(`INSERT INTO address (place_id, street, city, zipState, country, name, lat, lng, rating) VALUES ('${id}', '${street}', '${city}', '${zipState}', '${country}', '${name}', '${lat}', '${lng}', '${rating}') `)

// }

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM addressTable', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

var fetchData = function(input, callback) { 
  // input = input || 'San Francisco'
  connection.query(`select * from address where city = lower('${input}') `, function(err, results, fields){ 
    if(err) { 
      console.log("error ---> ", err)
      callback(err, null);
    } else { 
      console.log("results---->", results)
      callback(null, results);
    }
  })
}

// var cities= ['Berkeley', 'Cupertino', 'Daly City', 'Fremont', 'Hayward', 'Mountain View', 'Napa' ,'Novato', 'Oakland','Pleasanton', 'Redwood City', 'Sacramento', 'San Jose' ] 

// for( var i = 0; i < cities.length; i++) { 
//   populateData('Yoga in ' + cities[i]);
// }


// module.exports.selectAll = selectAll;
module.exports.fetchData = fetchData;
