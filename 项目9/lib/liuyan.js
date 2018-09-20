class Liuyan{
	constructor(){
		this.bindEvent();
		this.add();
	}
	bindEvent(){
		$('#btn').on('click',function(){
			var info = $('#info').val();
			console.log(info);
			if (info == "") {
				alert('内容不能为空');
				return;
			}
			$.post('php/regis.php',{
				'info': info
			},function(data){
				console.log(data);
				location.href = 'liuyan.html';
			})
		})
	}
	add(){
		$.post('php/addLiuyan.php',function(data){
			console.log(data);
			$('#box').append(data);

		})
	}
}
new Liuyan();