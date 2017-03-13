$(document).ready(function()
{ 
	   
	$('[name="save"]').click(function() {
		alert("file saved");  
	
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
	 
	var nav_bar= "<div id='nav_bar'><button class='nav_button'>Click me</button> <div id='gold_goal'><div class='progress-bar progress-bar-warning progress-bar-striped' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:100%'>Daily Gold</div></div></div>" 
	             + "<div id='account'></div>"
				 + "<div id='subreddits_list'></div>";	 
            
				 
		$('[name="icon_menu"]').click(function(){ 
			
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
	            $text.find('em').text('Done');
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



function gen(target, cssClass, params) {
        var obj = $('#templates .upvote').clone();
        obj.addClass(cssClass);
        $(target).append(obj);
        return obj.upvote(params);
        }

        $(function() {
                function gen_examples(params) {
                    gen('#examples', '', params);
                }

                var functions = [gen_examples];
                for (var i in functions) {
                    var fun = functions[i];
                    fun();
                    fun({count: 5});
                    fun({count: 6, upvoted: 1});
                    fun({count: 4, downvoted: 1});
                    fun({count: 15, starred: 1});
                    fun({count: 16, upvoted: 1, starred: 1});
                    fun({count: 14, downvoted: 1, starred: 1});
                }
        });

