// 引入express模块
const express=require('express');
// 创建路由器
var router=express.Router();
// 创建路由
router.get('/data',function(req,res){
	res.send('hahaha');
});



// 导出路由器
module.exports=router;