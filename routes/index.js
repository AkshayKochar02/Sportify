var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Payment', name: null });
});

router.get('/groundbooking', function(req, res, next) {
  res.render('groundbooking', { title: 'Groundbooking', name: null });
});

router.get('/eventbooking', function(req, res, next) {
  res.render('eventbooking', { title: 'Eventbooking', name: null });
});


// const express = require('express');
// const router = express.Router();


// Import route handlers
const metamaskRoutes = require('./metamask');

// Define routes
router.use('/metamask', metamaskRoutes);


module.exports = router;
