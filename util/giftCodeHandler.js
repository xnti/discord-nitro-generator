const log = require('./logHandler.js')      // logging functions.
const proxy = require('./proxyHandler.js')  // proxy functions.

const request = require('request');         // for http request.
const fs = require("fs");                   // filesystem.
var working = [];                           // arrays.
var firstTimeLauch = true;

const generateCode = () => {
    try {
        let code = "";
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 24; i++)
            code = code + letters.charAt(Math.floor(Math.random() * letters.length));
        return code;
    }
    catch (error) { log.error(error) }
}

const checkCode = (code) => {
    if(firstTimeLauch) {
        firstTimeLauch=false;
        proxy.update()
        return;
    }
    try {
        var currentProxy = proxy.url();
        var proxiedRequest = request.defaults({ 'proxy': currentProxy });
        proxiedRequest.timeout = 1500;
        proxiedRequest.get(`https://discordapp.com/api/v9/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`, (error, resp, body) => {
            if (error) {
                log.error(`Bad proxy: ${currentProxy}`)
                log.info(`Connection error: switching proxy`);
                proxy.update();
                return;
            }
            body = JSON.parse(body);
            if(body.message) log.info(`Current proxy: ${currentProxy}`)
            if (body.message !== "Unknown Gift Code" && body.message !== "The resource is being rate limited." && body.message !== "You are being rate limited.") {
                log.success(`FOUND CODE THAT WORKS: https://discord.gift/${code}`);
                working.push(`https://discord.gift/${code}`);
                fs.writeFileSync(__dirname + '/codes.json', JSON.stringify(working, null, 4));
            }
            else if (body.message === "The resource is being rate limited." || body.message === "You are being rate limited.") {
                proxy.update();
                log.info("Rate limit reached! Switched proxy");
            } else log.warn(`Invalid: ${code} : Searching!`);
        });
    }
    catch (error) {
        logger.error(`An error occurred:`);
        logger.error(error);
        return;
    }
}

module.exports = {
    generate: generateCode,
    check: checkCode
}