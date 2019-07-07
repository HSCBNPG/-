// 引入express模块
const express=require('express');
// 创建路由器
var router=express.Router();
// 引入连接池模块
var pool=require('../../mysql/pool.js');
// 创建首页路由

// 创建注册路由
router.post('/reg',function(req,res){
	// 获取post请求的值
	var obj=req.body
	// 验证是否为空
	if(!obj.uname){
		res.send('请输入用户名');
		return;
	}
	if(!obj.upwd){
		res.send('请输入密码');
		return;
	}
	// 执行SQL语句，如果用户名重复，提示,如果不重复插入数据
	pool.query('SELECT * FROM user WHERE uname=?',[obj.uname],function(err,result){
		if(err)throw err;
		// result是语句执行结果返回值，一个数组
		if(result.length>0){
			res.send('用户名重复');
		}else{
			// 如果不重复插入数据并提示注册成功
			pool.query('INSERT INTO user SET ?',[obj],function(err,result){
				if(err)throw err;
				// result是一个对象affectedRows是result下的一个属性
				if(result.affectedRows>0){
					res.send('注册成功');
				}
			});
		}
	});
});
// 创建登录路由
router.get('/log',function(req,res){
	// 获取请求对象并转为对象
	var obj=req.query;
	pool.query('SELECT * FROM user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
		if(err)throw err;
		console.log(result)
		if(result.length>0){
			res.send('登陆成功');
		}else{
			res.send('账户名或密码错误')
		}
	})
});
// result规则登录路由
router.get('/v1/restful_log/:uname&:upwd',function(req,res){
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql='select * from user where uname=? and upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send('登陆成功');
		}else{
			res.send('登陆失败')
		}
	});
});

// 导出路由器
module.exports=router;