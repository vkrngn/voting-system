var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users-form'); 
});

// This code creates a POST route for '/create' which stores all the user 
// input data in the 'userDetails' variable. It then inserts the user data 
// into the 'users' table using a SQL query. Finally, it redirects the user 
// to the '/users/form' page.

router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/users/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;