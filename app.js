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
const log = require('./util/logHandler')
const giftCode = require('./util/giftCodeHandler')

const triesPerSecond = 1;

log.signature()

setInterval(() => giftCode.check(giftCode.generate()), (5 / triesPerSecond) * 50)