const lineReader = require('line-reader');      // to read the lines of 'proxies.txt'
const log = require('./logHandler.js')          // logging functions.

const proxyFile = __dirname + "/proxies.txt"    // proxy list declaration.
var proxyLine = 0;
var proxyURL = "";

const updateProxy = () => {
    try {
        proxyLine++
        var readLine = 0;
        lineReader.eachLine(proxyFile, function (line, last) {
            readLine++;
            if (readLine === proxyLine)
                proxyURL = "http://" + line;
            if (last)
                readLine = 0;
        })
    }
    catch (err) {
        log.error(err)
    }
}

module.exports = {
    update: updateProxy,
    url: () => {
        return proxyURL;
    }
}