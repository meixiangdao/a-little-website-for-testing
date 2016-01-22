$(function() {
	(function() {

		$.getJSON('data/story.json', function(rt, textStatus, xhr) {
			//初始化，打开这个页面时，就显示第一季的前五集
			$('.pageMain ul li').eq(0).html('<span>第1集</span> ' + rt.season1.s1.name + '<br>' + rt.season1.s1.content).end().eq(1).html('<span>第2集</span> ' + rt.season1.s2.name + '<br>' + rt.season1.s2.content).end().eq(2).html('<span>第3集</span> ' + rt.season1.s3.name + '<br>' + rt.season1.s3.content).end().eq(3).html('<span>第4集</span> ' + rt.season1.s4.name + '<br>' + rt.season1.s4.content).end().eq(4).html('<span>第5集</span> ' + rt.season1.s5.name + '<br>' + rt.season1.s5.content);


			//打开页面后就可以在不点击season按钮式能点击story按钮
			//点击第一季的任何一个story按钮可以分别预览
			if ($('.pageMain button[class~=ss1]').hasClass('chosen')) {

				$('.pageMain button[class*=story]').click(function() {
					var buttonClass = $(this).attr('class');
					if (/\s/.test(buttonClass)) {
						var arr = buttonClass.split(/\s/);
						buttonClass = arr[0];	//获取纯粹的buttonClass，即无chosen
					}
					$('.pageMain button[class*=story]').removeClass('chosen');
					$(this).addClass('chosen');

					var storyNum;	//设置不同的story按钮按下时返回的基数值，便于冲JSON获取相应的值
					switch (buttonClass) {
						case 'story15' :
							storyNum = 0;
							break;
						case 'story610' :
							storyNum = 5;
							break;
						case 'story1115' :
							storyNum = 0;
							break;
						case 'story16' :
							storyNum = 0;
							break;
					}

					
					if (buttonClass == 'story1115') {		//当按下的story1115按钮时
						$('.pageMain ul li').eq(0).html('<span>番外第'+(storyNum+1)+'话</span> ' + rt.season1['f'+(storyNum+1)].name + '<br>' + rt.season1['f'+(storyNum+1)].content).end().eq(1).html('<span>番外第'+(storyNum+2)+'话</span> ' + rt.season1['f'+(storyNum+2)].name + '<br>' + rt.season1['f'+(storyNum+2)].content).end().eq(2).html('<span>番外第'+(storyNum+3)+'话</span> ' + rt.season1['f'+(storyNum+3)].name + '<br>' + rt.season1['f'+(storyNum+3)].content).end().eq(3).html('<span>番外第'+(storyNum+4)+'话</span> ' + rt.season1['f'+(storyNum+4)].name + '<br>' + rt.season1['f'+(storyNum+4)].content).end().eq(4).html('<span>番外第'+(storyNum+5)+'话</span> ' + rt.season1['f'+(storyNum+5)].name + '<br>' + rt.season1['f'+(storyNum+5)].content);
					} else if (buttonClass != 'story1115' && buttonClass != 'story16') {
						$('.pageMain ul li').eq(0).html('<span>第'+(storyNum+1)+'集</span> ' + rt.season1['s'+(storyNum+1)].name + '<br>' + rt.season1['s'+(storyNum+1)].content).end().eq(1).html('<span>第'+(storyNum+2)+'集</span> ' + rt.season1['s'+(storyNum+2)].name + '<br>' + rt.season1['s'+(storyNum+2)].content).end().eq(2).html('<span>第'+(storyNum+3)+'集</span> ' + rt.season1['s'+(storyNum+3)].name + '<br>' + rt.season1['s'+(storyNum+3)].content).end().eq(3).html('<span>第'+(storyNum+4)+'集</span> ' + rt.season1['s'+(storyNum+4)].name + '<br>' + rt.season1['s'+(storyNum+4)].content).end().eq(4).html('<span>第'+(storyNum+5)+'集</span> ' + rt.season1['s'+(storyNum+5)].name + '<br>' + rt.season1['s'+(storyNum+5)].content);
					} else if (buttonClass == 'story16') {
						$('.pageMain ul li').html('');
					}
				});
			}


			$('.pageMain button[class*=ss]').click(function() {
				//当按下season按钮时，ul的li就显示和每季一样的颜色，表示属于这一季
				$('.pageMain button[class*=ss].chosen').removeClass('chosen');
				$(this).addClass('chosen');
				var seasonColor = $(this).css('background-color');
				$('.pageMain ul li').css('background-color', seasonColor);

				var seasonName = 'season' + $(this).attr('class').charAt(2);

				//实现当点击每一季的按钮时，上面的分集按钮就跳转到第1-5集这个按钮上
				$('.pageMain button[class*=story].chosen').removeClass('chosen');
				$('.pageMain button[class*=story]').eq(0).addClass('chosen');
				$('.pageMain ul li').eq(0).html('<span>第1集</span> ' + rt[seasonName].s1.name + '<br>' + rt[seasonName].s1.content).end().eq(1).html('<span>第2集</span> ' + rt[seasonName].s2.name + '<br>' + rt[seasonName].s2.content).end().eq(2).html('<span>第3集</span> ' + rt[seasonName].s3.name + '<br>' + rt[seasonName].s3.content).end().eq(3).html('<span>第4集</span> ' + rt[seasonName].s4.name + '<br>' + rt[seasonName].s4.content).end().eq(4).html('<span>第5集</span> ' + rt[seasonName].s5.name + '<br>' + rt[seasonName].s5.content);



				//点击第一季的任何一个预览
				// if (seasonName == 'season1') {
				// if ($('.pageMain button[class~=ss1]').hasClass('chosen')) {

				$('.pageMain button[class*=story]').click(function() {
					var buttonClass = $(this).attr('class');
					if (/\s/.test(buttonClass)) {
						var arr = buttonClass.split(/\s/);
						buttonClass = arr[0];		//获取纯粹的buttonClass，即无chosen
					}
					$('.pageMain button[class*=story]').removeClass('chosen');
					$(this).addClass('chosen');

					var storyNum;
					switch (buttonClass) {
						case 'story15' :
							storyNum = 0;
							break;
						case 'story610' :
							storyNum = 5;
							break;
						case 'story1115' :
							storyNum = 0;
							break;
						case 'story16' :
							storyNum = 0;
							break;
					}

					
					if (seasonName == 'season1') {		//当按下第一季按钮时
						if (buttonClass == 'story1115') {		//当按下的story1115按钮时
							$('.pageMain ul li').eq(0).html('<span>番外第'+(storyNum+1)+'话</span> ' + rt.season1['f'+(storyNum+1)].name + '<br>' + rt.season1['f'+(storyNum+1)].content).end().eq(1).html('<span>番外第'+(storyNum+2)+'话</span> ' + rt.season1['f'+(storyNum+2)].name + '<br>' + rt.season1['f'+(storyNum+2)].content).end().eq(2).html('<span>番外第'+(storyNum+3)+'话</span> ' + rt.season1['f'+(storyNum+3)].name + '<br>' + rt.season1['f'+(storyNum+3)].content).end().eq(3).html('<span>番外第'+(storyNum+4)+'话</span> ' + rt.season1['f'+(storyNum+4)].name + '<br>' + rt.season1['f'+(storyNum+4)].content).end().eq(4).html('<span>番外第'+(storyNum+5)+'话</span> ' + rt.season1['f'+(storyNum+5)].name + '<br>' + rt.season1['f'+(storyNum+5)].content);
						} else if (buttonClass != 'story1115' && buttonClass != 'story16') {
							$('.pageMain ul li').eq(0).html('<span>第'+(storyNum+1)+'集</span> ' + rt.season1['s'+(storyNum+1)].name + '<br>' + rt.season1['s'+(storyNum+1)].content).end().eq(1).html('<span>第'+(storyNum+2)+'集</span> ' + rt.season1['s'+(storyNum+2)].name + '<br>' + rt.season1['s'+(storyNum+2)].content).end().eq(2).html('<span>第'+(storyNum+3)+'集</span> ' + rt.season1['s'+(storyNum+3)].name + '<br>' + rt.season1['s'+(storyNum+3)].content).end().eq(3).html('<span>第'+(storyNum+4)+'集</span> ' + rt.season1['s'+(storyNum+4)].name + '<br>' + rt.season1['s'+(storyNum+4)].content).end().eq(4).html('<span>第'+(storyNum+5)+'集</span> ' + rt.season1['s'+(storyNum+5)].name + '<br>' + rt.season1['s'+(storyNum+5)].content);
						} else if (buttonClass == 'story16') {
							$('.pageMain ul li').html('');
						}
					} else if (seasonName == 'season2') {
						if (buttonClass == 'story1115') {		//当按下的story1115按钮时
							$('.pageMain ul li').eq(0).html('<span>第11集</span> '+rt.season2.s11.name + '<br>' + rt.season2.s11.content).end().eq(1).html('<span>番外第'+(storyNum+1)+'话</span> '+rt.season2['f'+(storyNum+1)].name + '<br>' + rt.season2['f'+(storyNum+1)].content).end().eq(2).html('<span>番外第'+(storyNum+2)+'话</span> '+rt.season2['f'+(storyNum+2)].name + '<br>' + rt.season2['f'+(storyNum+2)].content).end().eq(3).html('<span>番外第'+(storyNum+3)+'话</span> '+rt.season2['f'+(storyNum+3)].name + '<br>' + rt.season2['f'+(storyNum+3)].content).end().eq(4).html('<span>番外第'+(storyNum+4)+'话</span> '+rt.season2['f'+(storyNum+4)].name + '<br>' + rt.season2['f'+(storyNum+4)].content);
						} else if (buttonClass != 'story1115' && buttonClass != 'story16') {
							$('.pageMain ul li').eq(0).html('<span>第'+(storyNum+1)+'集</span> ' + rt.season2['s'+(storyNum+1)].name + '<br>' + rt.season2['s'+(storyNum+1)].content).end().eq(1).html('<span>第'+(storyNum+2)+'集</span> ' + rt.season2['s'+(storyNum+2)].name + '<br>' + rt.season2['s'+(storyNum+2)].content).end().eq(2).html('<span>第'+(storyNum+3)+'集</span> ' + rt.season2['s'+(storyNum+3)].name + '<br>' + rt.season2['s'+(storyNum+3)].content).end().eq(3).html('<span>第'+(storyNum+4)+'集</span> ' + rt.season2['s'+(storyNum+4)].name + '<br>' + rt.season2['s'+(storyNum+4)].content).end().eq(4).html('<span>第'+(storyNum+5)+'集</span> ' + rt.season2['s'+(storyNum+5)].name + '<br>' + rt.season2['s'+(storyNum+5)].content);
						} else if (buttonClass == 'story16') {
							$('.pageMain ul li').eq(0).html('<span>番外第5话</span> '+rt.season2.f5.name + '<br>' + rt.season2.f5.content);
						}
					} else {
						if (buttonClass == 'story15') {		
							$('.pageMain ul li').eq(0).html('<span>第'+(storyNum+1)+'集</span> ' + rt.season3['s'+(storyNum+1)].name + '<br>' + rt.season3['s'+(storyNum+1)].content).end().eq(1).html('<span>第'+(storyNum+2)+'集</span> ' + rt.season3['s'+(storyNum+2)].name + '<br>' + rt.season3['s'+(storyNum+2)].content).end().eq(2).html('<span>第'+(storyNum+3)+'集</span> ' + rt.season3['s'+(storyNum+3)].name + '<br>' + rt.season3['s'+(storyNum+3)].content).end().eq(3).html('<span>第'+(storyNum+4)+'集</span> ' + rt.season3['s'+(storyNum+4)].name + '<br>' + rt.season3['s'+(storyNum+4)].content).end().eq(4).html('<span>第'+(storyNum+5)+'集</span> ' + rt.season3['s'+(storyNum+5)].name + '<br>' + rt.season3['s'+(storyNum+5)].content);
						} else {
							$('.pageMain ul li').html('');
						}	
					}
				});
			});

		});

	})();
});




