$(function() {
	(function() {
		$.getJSON('data/actors.json', function(rt, textStatus, xhr) {

			$(document).on('click', '.pageMain .actors img', function(evt) {
				showInfo(evt, $(this));
			});


			$('.pageMain .info .more').click(function() {
				$('.total').slideDown();
			});

			$('.pageMain .info .close').click(function() {
				$('.pageMain .info').css('display', 'none');
				$('.total').slideUp();
			});

			
			/**
			 * showInfo函数是用来实现鼠标点击头像后显示信息框功能的
			 * @param  {object} e     事件对象
			 * @param  {object} _this jQuery对象
			 * @return {void}       无返回值，该函数只是个功能函数
			 */
			function showInfo(e, _this) {

				var imgClass = _this.attr('class');
				$('.pageMain .info div[class*=Info]').parent().css('display', 'none').end().css('display', 'none');
				var box = $('.pageMain .info div[class*=' + imgClass + ']').parent().css('display', 'inline-block').end().css('display', 'inline-block');


				if (imgClass === 'gebu') {
					box.html('这个妞叫<span class="point">' + rt[imgClass].stageName + '</span>，真名' + rt[imgClass].realName + '，' + rt[imgClass].nativePlace + '人，是做' + rt[imgClass].job + '的，代表作是<span clsss="point">' + rt[imgClass].works + '</span>，最新作品是<span class="point">' + rt[imgClass].newest + '，将于2015年12月18日上映，多多关注啊！</span>');
				} else {
					box.html('这货叫<span class="point">' + rt[imgClass].stageName + '</span>，真名' + rt[imgClass].realName + '，' + rt[imgClass].nativePlace + '人，是做' + rt[imgClass].job + '的，代表作是<span clsss="point">' + rt[imgClass].works + '</span>，最新作品是<span class="point">' + rt[imgClass].newest + '，将于2015年12月18日上映，多多关注啊！</span>');
				};


				var mouseX = e.pageX;
				var mouseY = e.pageY;
				var actorsX = ($('.pageMain').width() - $('.pageMain .actors').width())/2;
				var actorsY = $('.pageMain .actors').get(0).offsetTop;		//到父元素上边框的距离，本应是到.pageMain的距离，但实际结果居然是到页面顶部的距离
				//缩放前后，.pageMain .actors的宽度不变，.actors到顶部的距离也是不变的
				var boxX = mouseX - actorsX;
				var boxY = mouseY - actorsY;
				if (boxX > 600) {
					boxX -= 600;
				};
				if (boxY >400) {
					boxY -= 200;
				};
				$('.info').css({
					'position' : 'absolute',
					'top' : boxY + 50 + 'px',
					'left' : boxX + 50 + 'px',
					'z-index' : 5
				});

				$('.total .t1 td').eq(1).text(rt[imgClass].stageName).end().eq(3).text(rt[imgClass].realName).end().eq(5).text(rt[imgClass].birthday);
				$('.total .t2 td').eq(1).text(rt[imgClass].nativePlace).end().eq(3).text(rt[imgClass].height).end().eq(5).text(rt[imgClass].graduated);
				$('.total .t3 td').eq(1).text(rt[imgClass].fav).end().eq(3).text(rt[imgClass].company).end().eq(5).text(rt[imgClass].job);
				$('.total .t4 td').eq(1).text(rt[imgClass].works).end().eq(3).text(rt[imgClass].newest);
				$('.total .t5 td').eq(1).html(function() {
					var len = rt[imgClass].detailed.length;
					var val = "";
					for (var i=0; i<len; i++) {
						val += i+1 + '. ' + rt[imgClass].detailed[i] + '<br>';
					}
					return val;
				});
				//动态添加从JSON里获取的数据
			}

		});

	})();
});