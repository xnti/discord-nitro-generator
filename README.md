
## Discord Nitro Generator 
<img src="https://img.shields.io/github/license/xnti/discord-nitro-generator"><img src="https://img.shields.io/github/last-commit/xnti/discord-nitro-generator"><img src="https://img.shields.io/github/stars/xnti/discord-nitro-generator?style=social">


Discord Bot that tries Discord Nitro gift codes if exists. Feel free to contribute this project.

***[!]*** However **it is very very very low (impossible) chance** to get a working *Nitro gift* due to **randomized 24 digit code.**

- Discord Nitro = 24 Chars (1.0408797e+43 possibility)

- Discord Nitro Classic = 16 Chars (4.7672402e+28 possibility)

Mathematically impossible if you consider gifts are claimed by real recipient in hours. :c

**People selling Discord Nitro for low price is probably with stolen credit card or stolen Discord Accounts with saved PayPal account. Please do not purchase from them, it is a crime.**




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

[Website](https://www.antidev.net)
# Requirements
- Node.js
- Node Package Manager (npm)

# Dependencies
- fs
- line-reader
- request

# How to install & run
- Firstly clone repo with command line.
```bash 
$ git clone https://github.com/xnti/discord-nitro-generator
```
- Switch directory to repo.
```bash
$ cd discord-nitro-generator
```
- Install dependencies.
```bash
$ npm install
```
- Run application.
```bash 
$ node app.js
```

