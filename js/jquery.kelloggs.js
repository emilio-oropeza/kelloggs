var videos = [
	"M74kCD-4Rwc"
];





window.addEventListener("load", callback, false);
		
function callback(){
    //var traqball_2 = new Traqball({stage: "box1", axis: [0,1,0], angle: 0.7});
    var traqball_2 = new Traqball({stage: "box1", axis: [0,1,0], angle: 0.7, limitAxxis: "y"});
}

$(document).ready(function(){
	var width = $(".video").width();
	var height = $(".video").height();

	$(window).resize(function(){
		width = $(".video").width();
		height = $(".video").height();
	});

	$(".videos").each(function(key, val){
		if(key < videos.length){
			$(this).click(function(){
				$("#video_yt").show();
				autoplay(videos[key]);
			});
		}	
	});

	$("#close").click(function(){
		$("#video_yt_cont").html('');
		$("#video_yt").hide();
	});
});

function autoplay(vcode){
	"use strict";
  	$("#video_yt_cont").html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}