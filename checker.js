/*set casperjs Path
This set path to casperJS and inject the bootstrap.js
*/
phantom.casperPath = "./casperjs/";
phantom.injectJs("./casperjs/bin/bootstrap.js");

var casper = require('casper').create({
	verbose:true,
	logLevel:'debug',
	userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; SM-G900P Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko)"
});

casper.start();
casper.userAgent("Mozilla/5.0 (Linux; Android 6.0.1; SM-G900P Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko)");
casper.thenOpen("http://click.cpiapi.com/clicks?userID=5714f1aa7dfaa1da08112ec0&offerID=2244004", function() {
    this.capture('pic.jpg');
}); 
 
casper.run()