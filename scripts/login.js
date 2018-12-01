var request = require("request");

var options = { 
method: 'POST',
  url: 'https://zulily.egain.cloud/system/ws/v12/authentication/user/login',
  qs: { forceLogin: 'yes' },
  headers: 
   { 
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: { userName: 'nphillips@zulily.com', password: 'Password123' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response.headers['x-egain-session']);
});
