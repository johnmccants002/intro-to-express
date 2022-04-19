 // Load express
 const express = require('express');
 
 // Create our express appno
 
 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing

 const path = require('path');

 const app = express();

 const students = require('./data/students');
 

 app.get('/', function (req, res) {
   res.send('<h1>Welcome to tonights homework!</h1>');
 });

 app.set('view engine', 'ejs');

 app.set('views', path.join(__dirname, 'views'));
 
 // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(4000, function () {
   console.log('Listening on port 4000!jfwofjweiofwe!!!!');
 });

 app.get('/home', function (req, res) {
     res.render('home');
 })

 app.get('/students', function(req, res) {
    res.render('students/index', {
      students: students.getAll()
    });
  });