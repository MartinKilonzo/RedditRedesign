$(document).ready(function()
{ 
	$("#nav_bar").hide();
	$('[name="save"]').click(function() {
		alert("file saved");  
	
	});
	
	$(".content_pic").colorbox();
	
	$("#icon_menu").click(function(){
    $("#nav_bar").show();
	});
	
	 $("#cancel").click(function(){
        $("#nav_bar").hide();
    });
	
	$(".vote").click(function(){
    var count = parseInt($("~ .count", this).text());
    
	if($(this).hasClass("down")) {
      var count = count - 1;
       $("~ .count", this).text(count);
    } 
	
	});
	$('[name="upvote"]').click(function(){
		alert("Login to use upvote");
	});
	
	//分享文件
	var share_link = "<input type='text' value='http://sample.com'>";
	
		$('[name="share"]').click(function(){ 
			TINY.box.show(share_link,0,0,0,0)
		});
	
	//搜索
	var search = "<input type='text'id='search_bar_cover' placeholder='Search'/>";
	$('#search_bar').focus(function(){
		TINY.box.show(search,0,0,0,0)
	});
	
	var $progress = $('.progress'), $bar = $('.progress__bar'), $text = $('.progress__text'), percent = 0, update, speed = 200, orange = 55,  timer;
	update = function () {
	    timer = setTimeout(function () {
			
	        percent += Math.random() * 1.8;
	        percent = parseFloat(percent.toFixed(1));
			
	        $text.find('em').text(percent + '%');
	        if (percent >= 100) {
	            percent = 100;
	            $progress.addClass('progress--complete');
	            $text.find('em').text('Complete');
	        } else {
				$bar.addClass('progress__bar--yellow');
	            speed = Math.floor(Math.random() * 1200);
	            update();
	        }
	        $bar.css({ width: percent + '%' });
	    }, speed);
	};
	
	setTimeout(function () {
	    $progress.addClass('progress--active');
	    update();
	}, 1000);
	
});


		



