const prototype = (message, type) => {
    return console.log(`[${new Date().toLocaleDateString()}] [${type}]: ${message}`)
};

const success = (message) => {
    return prototype(message, "SUCCESS")
};

const info = (message) => {
    return prototype(message, "INFO")
};

const warn = (message) => {
    return prototype(message, "WARNING")
};

const error = (message) => {
    return prototype(message, "ERROR")
};

const signature = () => {
    return console.log('\x1b[41m', `  ▄████████ ███▄▄▄▄       ███      ▄█ 
  ███    ███ ███▀▀▀██▄ ▀█████████▄ ███ 
  ███    ███ ███   ███    ▀███▀▀██ ███▌
  ███    ███ ███   ███     ███   ▀ ███▌
▀███████████ ███   ███     ███     ███▌
  ███    ███ ███   ███     ███     ███ 
  ███    ███ ███   ███     ███     ███ 
  ███    █▀   ▀█   █▀     ▄████▀   █▀  

use responsibly it can get you blocked from discord.
  `)
}

module.exports = {
    success: success,
    info: info,
    warn: warn,
    error: error,
    signature: signature
}