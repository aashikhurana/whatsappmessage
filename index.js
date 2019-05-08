var express = require('express');
var app = express();

const accountSid = 'AC2cfc72f47120179e4085f4c5c3ba7155';
const authToken = '1015ef3958bf85ec70fdcb245ddfe3b1';
const client = require('twilio')(accountSid,authToken);



// route pages
app.get('/msg', function(req, res) {
	console.log("sending whatsapp message");

	client.messages.create({
         from: 'whatsapp:+14155238886',
         body: 'Your Order from Ora store with id #OD122334455 has been shipped and is posted near your car.',
         MediaUrl: 'https://demo.twilio.com/owl.png',
         to: 'whatsapp:+60176827596'
       })
      .then(message => console.log(message.sid));

});


// what port to run server on
app.listen(3000, function () {
  console.log('server started on port 3001');
});