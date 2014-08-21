//npm install twilio
var twilio = require('twilio/lib')('ACCOUNT_SID', 'AUTH_TOKEN');

var client = twilio();

client.sendMessage({
	to:'+1',
	from:'+1',
	body:'hello world'
}, function(err,message) {
	console.log(message);
});