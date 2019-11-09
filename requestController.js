'use strict';
var requestEndpointBehavior = require('./requestEndpointBehavior');

exports.requestEntry = function(req, res)
{
    if(req.body.requestType == 'twiScrape')
    {
        console.log('twiScrape');
        (async () => {
            await requestEndpointBehavior.initializeWebscrape();
            let details = await requestEndpointBehavior.getStockDetailsWebscrapeTwi(req.body.url);
            res.send(details)
            await requestEndpointBehavior.endWebscrape();
        })();
    }
}