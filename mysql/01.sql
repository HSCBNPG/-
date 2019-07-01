#设置数据库编码
SET NAMES UTF8;
#丢弃原数据库
DROP DATABASE IF EXISTS proj;
#创建数据库
CREATE DATABASE proj CHARSET=UTF8;
#进入数据库
USE proj;
CREATE TABLE user(
	uid INT,
	uname VARCHAR(10),
	sex BOOL
);
