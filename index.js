'use strict';
var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');

var app = express();
const PORT = 8888;

// File not commited
//var configs = require('./config.json');;
// Test LDAP config  from
// https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/
var configs = require('./ldap_config.json');;

configs.usernameField = '';
configs.passwordField = '';
configs.invalidCredentials = 'Invalid Credentials';
configs.badRequestMessage = 'Bad Request - Cannot Autheticate'
configs.noSuchObject = 'No Such Object'
configs.userNotFound = 'User Not Found'

var authOpt = {};
authOpt.session = false;
authOpt.successRedirect = '/profile';
//authOpt.failureRedirect = '/login';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

var getLDAPConfigs = function(req, callback) {
  // Get username and password
  process.nextTick(function() {

    configs.usernameField = req.body.username;
    configs.passwordField = req.body.password;

    console.log(configs);

    callback(null, configs);
  });
};

passport.use(new LdapStrategy(getLDAPConfigs,
  function(user, done) {
    console.log(user);
    return done(null, user);
  }
));

app.post('/login',
    passport.authenticate('ldapauth', authOpt),
    function (req, res) {
        console.log('POST request');
        res.json({status: 'ok', message: 'POST - /login'});
    });

app.get('/profile', function (req, res) {
    console.log('GET - /profile');
    res.send({status: 'ok', message: 'GET - /profile'});
});

// app.get('/login', function (req, res) {
//     console.log('GET - /login');
//     res.send({status: 'ok', message: 'GET - /login'});
// });

app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
});
