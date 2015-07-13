module.exports = function (client) {
  var panels = client.core.panels = {};
  panels.admin = require('./admin')(client);
  panels.debug = require('./debug')(client);
  panels.login = require('./login')(client);
  return panels;
};

