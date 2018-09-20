<?php
//查询
header("Content-Type:text/html;charset=utf-8");
$selStr = "SELECT * FROM liuyan";
include_once 'help.php';

$result = mysqli_query($con,$selStr);
if(!$result){
	die("数据库查询失败".mysqli_error($con));
}
echo "<table border='0' width='1200' cellpadding='1' cellspacing='0'>";
while($row = mysqli_fetch_assoc($result)){
	echo "<tr style='width:1200px; height:150px; background:rgb(250,250,250);'>".
			"<td >{$row['info']}</td>".
			"<td style='float:right'>{$row['date']}</td>".
		"</tr>";
}
echo "</table>";
?>
