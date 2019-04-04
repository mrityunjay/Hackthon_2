const express=require('express');
const app=express();

const server=app.listen(9000,() => {
	console.log(`Express running -> PORT ${server.address().port}`);
})

app.get('/',(req,res) => {
	res.send('Hello World!');
});

app.get('/SendMailToCustomer',(req,res) => {
	var nodemailer = require('nodemailer');
	var query=req.query['q'];
  var email=req.query['email']
	console.log(query);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tester.mrityunjay@gmail.com',
    pass: 'wbfeskdttsminrog'
  }
});

var mailOptions = {
  from: 'Remo Ride',
  to: email,
  subject: 'Remo Ride offers you a personal loan',
  html: query
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  res.end("Mail Sent");
});
});
