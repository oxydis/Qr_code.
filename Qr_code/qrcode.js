//-------Make sure you have install nodeJS.
//-------Install this : npm install qrcode.
//-------Now you can write this ->

var QRcode = require('qrcode');

QRcode.toDataURL('https://twitch.tv/oxydis', {type: 'terminal'}, function (err, url){
    console.log(url);
})

//-------In the line 6 you can type your url.
//-------Now you can run your code.
//-------Copy the link on the console and paste it on your navigator web.
//-------And now you can scan it with your phone