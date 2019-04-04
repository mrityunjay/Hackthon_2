const accountSid = 'ACf1549bd8046ac2dc114d4ec3c4b5927f';
const authToken = '870bbdf193c56f54e717dad6cf979df1';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+12028049031', body: 'Dear User, As a premium customer of Remo Rides', to: '+917972867447'}).then(message => console.log(message.sid));

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+917972867447',
         from: '+12028049031'
       })
      .then(call => console.log(call.sid));
