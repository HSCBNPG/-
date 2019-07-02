// 引入express模块
const express=require('express');
// 创建路由器
var router=express.Router();
// 创建路由
router.get('/data',function(req,res){
	res.send('hahaha');
});
// 创建首页路由
router.get('/index',function(req,res){
	res.send()
});
// 创建注册路由
router.get('/reg',function(req,res){
	
});
// 登录路由
router.get('/log',function(req,res){
	
})

// 导出路由器
module.exports=router;