const express = require('express');
const request = require('request');
const app = express();

app.set("views", "views")
app.set("view engine", "ejs")


app.get('/news', function(req, res){
    request('https://newsapi.org/v2/top-headlines?country=in&apiKey=ee71214cfb774807902283770256579d', function(err, response, body){
        if(err){
            console.log(err);
        }else{
            res.render('news',{
                data: JSON.parse(body)
            })
        }
    })
})


app.listen(3000,function(){
    console.log("server started");
    
})