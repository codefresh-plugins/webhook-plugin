const PluginController = require('./plugin/plugin.controller');

PluginController.sendNotify()
    .then(console.log)
    .catch(console.error);
