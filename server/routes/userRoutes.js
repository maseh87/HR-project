var userController = require('../controllers/userController.js');

module.exports = function(app, passport) {
  app.get('/users/comp/:id', userController.getCompetition);
}