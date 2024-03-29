// 引入express模块
const express=require('express');
// 创建服务器
var app=express();
app.listen(8081);
// 引入路由器模块
var router=require('./routes/user.js');
// 引入管理员路由器模块
var adm=require('./routes/adm.js');


// 托管静态资源到html下
app.use( express.static('../html') );
// app.use( express.static('files') );
// 引入body-parser中间件
const bodyparser=require('body-parser');
// 设置bodyparser中间件转换查询字符串的方法
app.use( bodyparser.urlencoded({
	extended:false
}) );


// 使用路由器，挂载路由器要放在中间件下边
app.use('/user',router);
// 挂载管理员路由器
app.use('/adm',adm);
// 设置监听端口
