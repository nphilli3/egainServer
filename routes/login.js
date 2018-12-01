var request = require('request')

module.exports = function(){

  var express = require('express');
  var router = require('express').Router()


  router.post('/')
  router.delete('/')

  //login
  router.post('/',function(req,res){

  var options = { 
    method: 'POST',
      url: 'https://zulily.egain.cloud/system/ws/v12/authentication/user/login',
      qs: { forceLogin: 'yes' },
      headers: 
       { 
         'cache-control': 'no-cache',
         'Content-Type': 'application/json' },
      body:{ 
        userName: req.body.userName,
        password: req.body.password 
     },
      json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.json(response)
    });

  })

  //Logout
  router.delete('/',function(req,res){

    var options = { 
    method: 'DELETE',
      url: 'https://zulily.egain.cloud/system/ws/v12/authentication/user/logout',
      headers: 
       { 
         'cache-control': 'no-cache',
         'Content-Type': 'application/json',
         'x-egain-session': req.headers['x-egain-session'] 
       },
      body:{ 
        userName: req.userName,
        password: req.password 
     },
      json: true 
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.json(response)
      console.log(response.headers['x-egain-session']);
    })
  })

  return router
}
