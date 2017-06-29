var http=require("http");
var fs=require("fs");
http.createServer(function (req,res) {
    var url=req.url;
    switch(url){
        case "/index.html":
            fs.readFile("index.html","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/html"});
                    res.end(data)
                }
            });
            break;
        case "/css":
            fs.readFile("index.css","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/css"});
                    res.end(data)
                }
            });
            break;
        case "/js":
            fs.readFile("index.js","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/javascript"});
                    res.end(data)
                }
            });
            break;
        case "/jpg":
            fs.readFile("1.jpg",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"image/jpeg"});
                    res.end(data)
                }
            });
            break;
        case "/img.html":
            fs.readFile("img.html","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/html"});
                    res.end(data)
                }
            });
            break;
        case "/logo.html":
            fs.readFile("logo.html","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/html"});
                    res.end(data)
                }
            });
            break;
        default:
            res.end("404 NOT FOUND")
    }
}).listen(5000);