
# Discord Nitro Generator.
Discord Bot that tries Discord Nitro gift codes if exists. 

***[!]*** However **it is very low chance** to get a working *Nitro gift* due to **randomized 18 digit code.**

    giftCode = function () {
		    let code = "";
		    let letters =	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
	    for (var i = 0; i < 18; i++) {
	    code = code + letters.charAt(Math.floor(Math.random() * letters.length));
    }
       return code;
    }

[Website](https://www.theculturemedium.com)
# how to use
- install node.js
- invite bot to your discord server
- enter your bot's login information, enter a channel's id.
- put your proxy list to "proxies.txt"
- run app.js with node

