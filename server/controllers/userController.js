// var User = require('../models/user.js');

module.exports = {
  getCompetition: function(req, res) {
    var id = req.params.id;
    console.log(id);
    res.send(200);
  }
}