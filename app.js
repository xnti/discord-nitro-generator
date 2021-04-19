/*
           ▄████████ ███▄▄▄▄       ███      ▄█  
          ███    ███ ███▀▀▀██▄ ▀█████████▄ ███  
          ███    ███ ███   ███    ▀███▀▀██ ███▌ 
          ███    ███ ███   ███     ███   ▀ ███▌
        ▀███████████ ███   ███     ███     ███▌
          ███    ███ ███   ███     ███     ███ 
          ███    ███ ███   ███     ███     ███ 
          ███    █▀   ▀█   █▀     ▄████▀   █▀  

        
    use responsibly it can get you blocked from discord.

*/
const SETTINGS = require('./settings.js'); // Imports the settings.
const request = require('request'); // for http request.
const logger = require(__dirname + "/util/logger"); // logs working nitros.
const fs = require("fs"); // filesystem.
const Discord = require('discord.js')
const client = new Discord.Client();
const proxyFile = __dirname + "/proxies.txt" // proxy list declaration.
const triesPerSecond = 1;
var proxyLine = 0;
var proxyURL = "";
var working = []; // Arrays.

logger.info("Nitro Generator by antibioticTR");

client.on('ready', message => {
    client.channels.cache.get(SETTINGS.DISCORD_CHANNEL_ID).send('$s');
})

client.on('message', msg => {
    if (msg.content === 'ping')
        msg.reply('Pong!');
});

client.on('message', message => {
    giftCode = function () {
        try {
            let code = "";
            let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            for (var i = 0; i < 24; i++)
                code = code + letters.charAt(Math.floor(Math.random() * letters.length));
            return code;
        }
        catch (error) { }
    }
    function updateLine() {
        try {
            proxyLine++
            var lineReader = require('line-reader');
            var readLine = 0;
            lineReader.eachLine(proxyFile, function (line, last) {
                readLine++;
                if (readLine === proxyLine)
                    proxyURL = "http://" + line;
                if (last)
                    readLine = 0;
            })
        }
        catch (error) { }
    }
    updateLine();
    checkCode = function (code) {
        try {
            var proxiedRequest = request.defaults({ 'proxy': proxyURL });
            proxiedRequest.timeout = 1500;
            proxiedRequest.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`, (error, resp, body) => {
                if (error) {
                    console.log('\x1b[33m%s\x1b[0m', `Connection error: switching proxy`);
                    updateLine();
                    return;
                }

                body = JSON.parse(body);
                if (body.message != "Unknown Gift Code" && body.message != "You are being rate limited.") {
                    message.channel.send(`FOUND CODE THAT WORKS: https://discord.gift/${code}`);
                    logger.log('\x1b[41m', `FOUND CODE THAT WORKS: https://discord.gift/${code}`);
                    console.log(JSON.stringify(body, null, 4));
                    working.push(`https://discord.gift/${code}`);
                    fs.writeFileSync(__dirname + '/codes.json', JSON.stringify(working, null, 4));
                }
                else if (body.message === "You are being rate limited.") {
                    client.on('ready', () => {
                        channelX.send('Rate limit reached! Switching proxy.')
                    })
                    updateLine();
                    console.log("Rate limit reached! Switched proxy");

                } else {
                    console.log('\x1b[36m%s\x1b[0m', `Invalid: ${code} : Searching!`);
                }
            });
        }
        catch (error) {
            logger.error(`An error occurred:`);
            logger.error(error);
            return;
        }
    }
    if (message.content === '$s') {
        try {
            message.channel.send('starting.')
            checkCode(giftCode());
            setInterval(() => {
                checkCode(giftCode());
            }, (5 / triesPerSecond) * 50);
            setInterval(() => {
                message.channel.send('yes i am working.')
            }, 3600000);
        }
        catch (error) {
            console.log(error)
        }
    }
})
// made by anti with love <3
client.login(SETTINGS.BOT_TOKEN);
