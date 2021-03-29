
# Discord Nitro Generator.
Discord Bot that tries Discord Nitro gift codes if exists. 

***[!]*** However **it is very low chance** to get a working *Nitro gift* due to **randomized 18 digit code.**

Discord Nitro = 18 Chars (1.8325271e+32 possibility)
Discord Nitro Classic = 16 Chars (4.7672402e+28 possibility)

Mathematically impossible if you consider gifts are claimed by real recipient in hours. :c
**People selling Discord Nitro for low price is probably with stolen credit card or stolen Discord Accounts with saved PayPal account.**


```js
    giftCode = function () {
		    let code = "";
		    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for (var i = 0; i < 18; i++) {
		code = code + letters.charAt(Math.floor(Math.random() * letters.length));
    	}
	return code;
    }
```

[Website](https://www.antidev.xyz)
# how to use
- install node.js
- invite bot to your discord server
- enter your bot's login information, enter a channel's id.
- put your proxy list to "proxies.txt"
- run app.js with node

