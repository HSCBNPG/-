// 引入express模块
const express=require('express');
// 引入mysql模块
const mysql=require('mysql');
// 引入连接池
var pool=require('../../mysql/pool.js');
// 创建路由
var adm=express.Router();
// 创建删除路由
adm.get('/delete',function(req,res){
	var obj=req.query;
	console.log(obj);
	pool.query('DELETE FROM user WHERE uid=?',[obj.uid],function(err,result){
		console.log(result)
		if(err)throw err;
		if(result.affectedRows>0){
			res.send('删除成功');
			return;
		}else{
			res.send('编号不存在');
			return;
		}
		
	})
});
// 创建查询路由
adm.get('/select',function(req,res){
	var sql='select * from user';
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

// 导出路由
module.exports=adm;