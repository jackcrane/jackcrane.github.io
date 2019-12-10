const request = require('request');

let apiKey = '58e6b5f1a47d8911e0208007bda45adc';
let city = 'portland';
let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+",appid="+apiKey
console.log(url)

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});