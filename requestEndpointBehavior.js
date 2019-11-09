var exports = module.exports = {};
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

exports.initializeWebscrape = async () => {
    console.log('Starting the scraper..');
    browser = await puppeteer.launch({
        headless: false
    })
    page = await browser.newPage();
    page.on('console', message => {
        console.log(`Message from puppeteer: ${message.text()}`);
    })
    console.log('Initialization completed..');
}

exports.getStockDetailsWebscrapeTwi = async (link) => {
    console.log(`Going to the Product Page.. ( ${link} )`);
    await page.goto(link, {
        waitUntil: 'networkidle0',
      });
    await page.waitFor(5);
    let details = await page.evaluate(() => {
        console.log('test');
        console.log('cool');
        var markup = document.documentElement.innerHTML;
        return {
            markup
        }
    });
    return details;
}

exports.endWebscrape = async () => {
    await browser.close();
}
