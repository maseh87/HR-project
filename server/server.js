var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport');

mongoose.connect('mongodb://localhost/stars');
var db = mongoose.connection;
db.on('open', console.log.bind(console, 'db connection successful'));
db.on('error', console.error.bind(console, 'database error'));

var app = express();
// require('./config/passport.js')(passport);
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "secret"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(__dirname + '/../client'));

require('./routes/userRoutes.js')(app, passport);

module.exports = app;