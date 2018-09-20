var bdy = document.documentElement || document.body;
class Backtop{
	constructor(){
		this.bindEvent();
	}
	bindEvent(){
		window.onscroll = function(){
			if( bdy.scrollTop > 700 ){
				$('#back').css('display','block');
			}else{
				$('#back').css('display','none');
			}
		}
		$('#back').on('click',function(){
			$('html,body').animate({
				'scrollTop':0
			},777)
		})
	}
}
new Backtop();
