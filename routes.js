'use strict';

module.exports = function(app)
{
    var requestHandlers = require('./requestController.js');
    app.route('/api/scrape')
       .post(requestHandlers.requestEntry);
};
