// 引入express模块
const express=require('express');
// 创建服务器
var app=express();
// 引入路由器模块
var router=require('./routes/user.js');
// 使用路由器
app.use('/user',router);
// 托管静态资源到html下
app.use( express.static('../html') );
// 设置监听端口
app.listen(8080);
