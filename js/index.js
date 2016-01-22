$(function() {

	(function() {

		$.getJSON('data/index.json', function(rt, textStatus, xhr) {

			$('.pageMain .seasonName').click(function() {
				//根据css，点击.seasonName面板就会显示所选择的这个ss的items，并隐藏其他ss的items
				$(this).parentsUntil('.wrap').children('.chosen').removeClass('chosen');
				$(this).parent().addClass('chosen');
			});

			$('.pageMain div[class^=ss] .items').find('td').click(function() {
				//点击后移除有chosen属性值的td，并给当前点击的td添加chosen属性值
				$(this).parentsUntil('.wrap').find('td.chosen').removeClass('chosen');
				$(this).addClass('chosen');

				var tdContent = $(this).html();
				if (tdContent.length < 3) {
					//字符串长度大于2的都是番外篇，如番外1
					tdContent = 's' + tdContent;
				} else {
					tdContent = 'f' + tdContent[2];
				};

				var arr = $(this).parentsUntil('.seasons');
				var s = 'season' + $(arr[arr.length - 1]).attr('class').charAt(2);
				$('.play iframe').attr('src', rt[s][tdContent]);
			});

		});

	})();




	//轮播器
	(function() {
		$('.slideBanner .pic').find('li').hide();
		$('.slideBanner .pic').find('li').eq(0).show();
		$('.slideBanner .mark').find('li').css('background', '#000');
		$('.slideBanner .mark').find('li').eq(0).css('background', '#999');
		
		var banner_index = 1;

		$('.slideBanner .mark').find('li').hover(function() {
			clearInterval(banner_timer);
			banner(this);
		}, function(){
			banner_index = $(this).index() + 1;
			banner_timer = setInterval(banner_fn, 1000);
		});

		
		var banner_timer = setInterval(banner_fn, 1000);

		function banner_fn() {
			if (banner_index >= $('.slideBanner .pic').find('li').length) {
				banner_index = 0;
			}
			banner($('.slideBanner .mark').find('li').eq(banner_index).get(0));
			banner_index++;
		}

		function banner(obj) {
			$('.slideBanner .pic').find('li').hide();
			$('.slideBanner .pic').find('li').eq($(obj).index()).show();
			$('.slideBanner .mark').find('li').css('background', '#000');
			$('.slideBanner .mark').find('li').eq($(obj).index()).css('background', '#999');
		}
	})();


});