// // 1. 导入http模块
// var http = require('http');
// // 2. 导入文件模块
// var fs = require('fs');
// // 3. 导入路径模块
// var path = require('path');
// // 4. 导入url模块（用来解析get请求参数）
// var url = require('url');
// // 5. 导入querystring模块（用来解析post请求参数）
// var querystring = require('querystring');
// // 6. 创建服务器
// var server = http.createServer();
// // 7. 监听客服端请求
// server.on('request',function (req,res) {
//     console.log(req.url + req.method);
//     // 9. 响应返回首页
//     if (req.url === '/') {
//         // 10. 读入文件（拼接）
//         fs.readFile(path.join(__dirname,'index.html'),function (err,data) {  
//             if (err) {
//                 throw err;
//             }
//             // 11. 响应写入文件
//             res.end(data);
//         })
//         // 12. 如果访问jquery
//     } else if (req.url === '/node_modules/jquery/dist/jquery.min.js') {
//         // 13. 路径太长，用一个变量接受
//         var jqPath = '/node_modules/jquery/dist/jquery.min.js';
//         // 14. 读入文件（拼接路径）
//         fs.readFile(path.join(__dirname,jqPath), function (err,data) {  
//             if (err) {
//                 throw err;
//             }
//             // 15. 写入文件
//             res.end(data);
//         })
//         // 16. 如果是ajax请求数据，并且是post请求
//     } else if (req.url.indexOf('/getRequest') === 0 && req.method === 'POST') {
//         /** POST 请求详解
//          * ost请求的参数不是一次性就发送的，因为post请求可以发送大量的数据
//          * 比如一部电脑好几个G，一次性发送不过来，所以需要分很多次发送
//          */
//         // 17. 定义一个空的数据变量来接受post请求的参数
//         var postData = '';
//         // 18. 给req对象注册一个接收数据的事件
//         req.on('data',function (chuck) {  
//             /**data事件详解
//              * 浏览器每发送一次数据包（chuck），该函数会调用一次。
//              * 该函数会调用多次，调用的次数是由数据和网速限制的
//              */
//             // 19. 每次发送的都数据都叠加到postData里面
//             postData += chuck;
//         })
//         // 20. 到post请求数据发完了之后会执行一个end事件，这个事件只执行一次
//         req.on('end', function () {
//             // 21. 此时服务器成功接受了本次post请求的参数
//             // post请求最终获取到的数据就是url协议组成结构中的query部分
//             console.log(postData);
//             // 22. 使用querystring模块来解析post请求
//             /**
//              * querystring详解
//              * 参数：要解析的字符串
//              * 返回值：解析之后的对象。
//              */
//             var postObjc = querystring.parse(postData);
//             // 23. 打印出post请求参数，
//             console.log(postObjc);
//         })
//     }
// })

// // n. 启用服务器
// server.listen(8082,function () { console.log('启用成功'); })

var http = require('http');

const express = require('express');
const app = express();

var  querystring  =  require('querystring');

var bodyParser = require('body-parser')
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  
        next();
})
//bodyParser配置
app.use(bodyParser.json());
// app.use( bodyParser.urlencoded({
//     extended: false
// }) )

// app.post('/formdata',multipartMiddleware, function (req, res) {
//   console.log(req.body);
//   res.send("post successfully!");
// });

// app.use(bodyParser.urlencoded({
//     extended:true
// }));
app.post("/login",function(req,res){
  console.log(req.body);
  if(req.body.user_name=="admin" &&req.body.password =="123456"){
	  res.json({
	      ok:1,
	      msg: "登陆成功",
		  
	  })
  }else{
	  res.json({
		  ok:-1
	  })
  }
  
	   
   
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
