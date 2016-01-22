$(function() {
	(function(){
		
		//当按下键盘时，检测当下的表单控件是否满足要求
		$('input').on('keyup', function() {
			if ($(this).get(0).validity.valid) {
				$(this).parent().next().css('display', 'inline').attr('src', 'images/contact/tick.png');
			} else {
				$(this).parent().next().css('display', 'inline').attr('src', 'images/contact/cancel.png');
			}
		});


		$('textarea').on('keyup', function() {
			if ($(this).get(0).validity.valid) {
				$(this).parent().next().css('display', 'inline').attr('src', 'images/contact/tick.png');
			} else {
				$(this).parent().next().css('display', 'inline').attr('src', 'images/contact/cancel.png');
			}
		});
		
		//当表单元素获得焦点时，设置相应的div背景颜色
		$('#username').focus(function() {
			$('form').css('background', 'rgba(221,51,0,.3)');
		});
		$('#email').focus(function() {
			$('form').css('background', 'rgba(0,100,0,.3)');
		});
		$('#job').focus(function() {
			$('form').css('background', 'rgba(0,78,180,.3)');
			$('div.job').css('display', 'block');
		});
		$('#age').focus(function() {
			$('form').css('background', 'rgba(128,0,128,.3)');
		});
		$('textarea').focus(function() {
			$('form').css('background', 'rgba(34,34,34,.3)');
		});


		//当表单元素获得焦点时，设置其label的字体样式
		$('input:not(#submit), textarea').focus(function() {
			$(this).css('border-width', '.03rem');
			$(this).parent().css({
				'font-weight' : 'bold',
				'font-size' : '.18rem',
			});
		}).blur(function() {
			$(this).css('border-width', '.01rem');
			$(this).parent().css({
				'font-weight' : 'normal',
				'font-size' : '.16rem'
			});
		});

	})();
});