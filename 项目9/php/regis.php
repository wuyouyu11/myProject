<?php
header("Content-Type:text/html;charset=utf-8");
$info =  $_POST["info"];
date_default_timezone_set('PRC');
$date = date('Y-m-d H:i:s',time());
include_once 'help.php';
//检测是否有注册过
$sqlStr =<<<sql1
SELECT info FROM liuyan WHERE info="$info";
sql1;
$res1 = mysqli_query($con, $sqlStr);
if(mysqli_num_rows($res1)>0){
	die("用户已存在");
}
//往数据库中插入数据
$sqlStr1 =<<<sql2
INSERT INTO liuyan (info,date) values ("$info","$date");
sql2;
$res2 = mysqli_query($con,$sqlStr1);
if($res2){
	echo("注册成功");
}else{
	die();
}