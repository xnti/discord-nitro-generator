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

const delay = 1000;

log.signature()

setInterval(() => giftCode.check(giftCode.generate()), delay)


/*
giftCode.check(giftCode.generate())
giftCode.check(giftCode.generate())
*/