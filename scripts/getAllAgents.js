var request = require("request");
var pagecount = 1


var options = { method: 'GET',
  url: 'https://zulily.egain.cloud/system/ws/v12/administration/user',
  qs: { department: 'service', '$pagesize': '75', '$pagenum': pagecount.toString()  },
  headers: 
   { 'cache-control': 'no-cache',
     'X-egain-session': 'd303948f-7267-4e3c-aed8-cfbac1721f5f',
   } 
 };

request(options, function (error, response, body) {
  if (error || response.statusCode != 200) throw new Error(error);

  //console.log(body);
  console.log(response.statusCode);
});

/*
while(response.status == 200){
  pagNum = options.qs.pagenum

  request(options, function(error,response,body){
  if (error) throw new Error(error)
  file.append(body)
  })
}

*/

function getAllAgents(maxPages){
  var pageCount = 1

  function getNextPage(){
    var options = { method: 'GET',
      url: 'https://zulily.egain.cloud/system/ws/v12/administration/user',
      qs: { department: 'service', '$pagesize': '75', '$pagenum': pagenum.toString()  },
      headers: 
       { 'cache-control': 'no-cache',
         'X-egain-session': 'd303948f-7267-4e3c-aed8-cfbac1721f5f',
       } 
     };

    request(options, function (error, response, body) {
      if (error || response.statusCode != 200) {
        throw new Error(error)
      }else{
        ++pageCount
        getNextPage()
      }

      //console.log(body);
      console.log(response.statusCode);
    });

  }
  getNextPage()
}