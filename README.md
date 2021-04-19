
# Discord Nitro Generator.
Discord Bot that tries Discord Nitro gift codes if exists. 

***[!]*** However **it is very very very low (impossible) chance** to get a working *Nitro gift* due to **randomized 24 digit code.**

- Discord Nitro = 24 Chars (1.0408797e+43 possibility)

- Discord Nitro Classic = 16 Chars (4.7672402e+28 possibility)

Mathematically impossible if you consider gifts are claimed by real recipient in hours. :c

**People selling Discord Nitro for low price is probably with stolen credit card or stolen Discord Accounts with saved PayPal account.**




```js
    giftCode = function () {
		    let code = "";
		    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for (var i = 0; i < 24; i++) {
		code = code + letters.charAt(Math.floor(Math.random() * letters.length));
    	}
	return code;
    }
```

[Website](https://www.antidev.xyz)
# how to use
- Install node.js from offical website
- Create a bot in Discord's Developer Portal.
- Enter your Bot's login token information, enter a Channel ID into `settings.js`.
- Invite bot to your Discord Server
- Put VALID proxy list to "proxies.txt"
- Run app.js with Node.js( `node app.js` )

