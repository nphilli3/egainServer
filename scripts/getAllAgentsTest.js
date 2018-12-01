var request = require("request");
var pagecount = 1


  function getNextPage(){
    var options = { method: 'GET',
      url: 'https://zulily.egain.cloud/system/ws/v12/administration/user',
      qs: { department: 'service', '$pagesize': '75', '$pagenum': pagecount.toString()  },
      headers: 
       { 'cache-control': 'no-cache',
         'X-egain-session': '50eaeccb-23a4-45af-857f-21e1a8946acb',
       } 
     };

    request(options, function (error, response, body) {
      if (error || response.statusCode != 200) {
        throw new Error(error)
      }else{
        ++pagecount
        getNextPage()
      }

      //console.log(body);
      console.log(response.statusCode);
    });

  }
  getNextPage()
