$(function() {
	(function() {
		//鼠标经过和离开信息时的样式
		$('.pageMain .info td').mouseenter(function() {
			if ($(this).index() % 2 <= 1e-6) {
				$(this).css('background-color', '#f60').next().css('border-color', '#f60');
			} else {
				$(this).css('border-color', '#f60').prev().css('background-color', '#f60');
			};
		}).mouseleave(function() {
			if ($(this).index() % 2 <= 1e-6) {
				$(this).css('background-color', '#555').next().css('border-color', '#333');
			} else {
				$(this).css('border-color', '#333').prev().css('background-color', '#555');
			};
		});
	})();

	(function() {
		//下面的角色展示轮播器
		//
		//默认中间显示第四张、第三张、第五张
		$('.pageMain .mainActors ul li.chosen').css({
			'display' : 'block',
			'left' : '3.2rem'
		}).prev().css({
			'display' : 'block',
			'left' : '.45rem',
			'top' : '.84rem'
		}).end().next().css({
			'display' : 'block',
			'left' : '7.3rem',
			'top' : '.84rem'
		});


		//设置flag的目的在于判断轮播器的左右两边是否还有图片，如果没有了，则为false，则停止向原方向行进。此外，如果左边没图片了，那么当点击了右边的按钮后，falgLeft就变为true，即恢复了轮播器向左移动的能力，那么当点击左边的按钮时，轮播器又能向左移动。右边的同理。
		var flagLeft = true;
		var flagRight = true;



		$('.pageMain .mainActors .right').on('click.r', clickRight);

		function clickRight() {
			if (flagRight == true) {
				$('.pageMain .mainActors ul li.chosen').prev().animate({
					'left' : 0,
					'top' : '.84rem',
					'opacity' : 0
				}, 500, function() {
					$(this).hide();
				}).end().animate({
					'left' : '.45rem',
					'top' : '.84rem',
					'width' : '2.65rem',
					'height' : '3.31rem'
				}, 500).removeClass('chosen').next().animate({
					'left' : '3.2rem',
					'top' : 0,
					'width' : '4rem',
					'height' : '5rem'
				}, 500).addClass('chosen').next().css({
					'left' : '7.75rem',
					'top' : '.84rem',
					'display' : 'block',
					'opacity' : 0
				}).animate({
					'left' : '7.3rem',
					'top' : '.84rem',
					'opacity' : 1
				}, 500, function() {
					if ($(this).next().get(0) == undefined) {
						flagRight = false;
					}
				});

				if (flagLeft == false) {
					flagLeft = true;
				}
			} 
		}

		$('.pageMain .mainActors .left').on('click.l', clickLeft);

		function clickLeft() {
			if (flagLeft == true) {
				$('.pageMain .mainActors li.chosen').next().animate({
					'left' : '7.75rem',
					'top' : '.84rem',
					'opacity' : 0
				}, 500, function() {
					$(this).hide();
				}).end().animate({
					'left' : '7.3rem',
					'top' : '.84rem',
					'width' : '2.65rem',
					'height' : '3.31rem'
				}, 500).removeClass('chosen').prev().animate({
					'left' : '3.2rem',
					'top' : 0,
					'width' : '4rem',
					'height' : '5rem'
				}, 500).addClass('chosen').prev().css({
					'left' : 0,
					'top' : '.84rem',
					'display' : 'block',
					'opacity' : 0
				}).animate({
					'left' : '.45rem',
					'top' : '.84rem',
					'opacity' : 1
				}, 500, function() {
					if ($(this).prev().get(0) == undefined) {
						flagLeft = false;
					}
				});

				if (flagRight == false) {
					flagRight = true;
				}
			}
	
		}
	})();
});