// 引入express模块
const express=require('express');
// 创建服务器
var app=express();
// 引入路由器模块
var router=require('./routes/user.js');
// console.log(userRoutes)
// 设置监听端口
app.listen(8080);
app.get('/index',function(req,res){
	res.sendFile(__dirname+'/../html/index.html');
});
// 使用路由器
app.use('/user',router);