const express=require('express');
var app=express();
// var router=express.Router();
// console.log(123)
app.listen(8080);
app.get("/add",function(req,res){
	// console.log(456)
	res.send('1111')
});
