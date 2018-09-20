class Tab{
	constructor(){
		this.tab();
	}
	tab(){
		$(".btn").on("click",function(){
			$(".cur").eq($(this).index()).addClass('show').siblings().removeClass('show');
			$('.btn').eq($(this).index()).css({
				'background':'#FFA500',
				'color':'#ccc'
			})
			.siblings()
			.css('background','#FFF');
		})
	}
}
new Tab();
