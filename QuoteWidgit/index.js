let request =require('request');
request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",function(err,response,body){
    let bodyJson=JSON.parse(body);
    let randomeQuote=bodyJson[0]['content'];
    document.getElementById("quote").innerHTML=randomeQuote
})

setInterval(function(){
    request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",function(err,response,body){
    let bodyJson=JSON.parse(body);
    let randomeQuote=bodyJson[0]['content'];
    document.getElementById("quote").innerHTML=randomeQuote
})
},5000)