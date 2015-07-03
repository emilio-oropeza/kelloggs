var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="kelloggs-copa-america";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

var numeroImages2=8;
var slider_on2=false;
var intervalID2;
var posicion_slider2=0;


var videos = [
	"7GwGQ0EIGqU",
	"N44-6iECg-Y",
	"uiNK9OoDjrI",
	"LJApDR1boIk",
	"8Ue3JDG-FpY",
	"wuDwYnaZ3GE",
	"NTw7n_zDJDQ",
	"lSLSLmCtJyQ",
	"Dhteb9QkF8A",
	"kwCInVDumFs",
	"Xp3XsNaUni4"
];

var ie = [
	"front",
	"left",
	"back",
	"left"
];

var box = 3;
var img = 0;

function loadDisqus(source, identifier, url) {
	if (window.DISQUS) {
		jQuery('#disqus_thread').insertAfter(source);
		/** if Disqus exists, call it's reset method with new parameters **/

		DISQUS.reset({
		reload: true,
		config: function () { 
		this.page.identifier = identifier.toString();    //important to convert it to string
		this.page.url = url;
		}
		});
	} else {
		//insert a wrapper in HTML after the relevant "show comments" link
		source.append('<div id="disqus_thread"></div>');
		//jQuery('<div id="disqus_thread"></div>').insertAfter(source);
		disqus_identifier = identifier; //set the identifier argument
		disqus_url = url; //set the permalink argument
		disqus_per_page=3;
		//append the Disqus embed script to HTML
		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
		jQuery('head').append(dsq);
	}
};

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) 
        return true;
    else                 
        return false;
}

$(document).ready(function(){
	var traqball_2 = new Traqball({stage: "box1", axis: [0,1,0], angle: 0.7, limitAxxis: "y"});
	setInterval(function () {
		traqball_2.setup({stage: "box1", limitAxxis: "y"});
	}, 30000);
	if(isIE()){
		console.log("es ie");
		$("#instructions_box").remove();
		$("section#box1").remove();
		var div = $('<div id="boxIE"></div>').prependTo("#indepth_box");
		var left = $('<div id="arrow_left" class="arrow"></div>').appendTo(div);
		var boxIE = $('<div id="box_gal"></div>').appendTo(div);
		var right = $('<div id="arrow_right" class="arrow"></div>').appendTo(div);
		$("#indepth_box").css({
			'background-image': 'url("'+ urlIndepth + 'images/Fondo_Caja2.jpg")',
			'background-size': 'cover'
		});
		$(left).on('click', function(){
			$(boxIE).css({'background-image': 'url("'+ urlIndepth + 'images/box'+box+'/'+ie[img]+'.jpg")'});
			img--;
			if(img<0){
				img = 3;
			}
		});
		$(right).on('click', function(){
			$(boxIE).css({'background-image': 'url("'+ urlIndepth + 'images/box'+box+'/'+ie[img]+'.jpg")'});
			img++;
			if(img>3){
				img = 0;
			}
		});
	}
	var width = $(".video").width();
	var height = $(".video").height();

	$(window).resize(function(){
		width = $(".video").width();
		height = $(".video").height();
	});

	$(".videos").each(function(key, val){
		if(key < videos.length){
			$(this).on("click",function(){
				$("#video_yt").show();
				autoplay(videos[key]);
			});
		}	
	});

	$("#close").on("click", function(){
		$("#video_yt_cont").html('');
		$("#video_yt").hide();
	});

	$(".box_mini").each(function(key, val){
		$(this).on("click", function(){
			traqball_2.setup({stage: "box1", axis: [0,1,0], angle: 0.7, limitAxxis: "y"});
			$("#indepth_cover").css('background-image','url("'+ urlIndepth + 'images/box'+(key+1)+'/Portada.jpg"), url("'+ urlIndepth + 'images/PortadaPx.jpg")');
			if(isIE()){
				img = 0;
				$("#box_gal").css({'background-image': 'url("'+ urlIndepth + 'images/box'+(key+1)+'/'+ie[img]+'.jpg")'});
				box = key+1;
			}else{
				$("#front").css('background-image','url("'+ urlIndepth + 'images/box'+(key+1)+'/front.jpg")');
				$("#back").css('background-image','url("'+ urlIndepth + 'images/box'+(key+1)+'/back.jpg")');
				$("#left").css('background-image','url("'+ urlIndepth + 'images/box'+(key+1)+'/left.jpg")');
				$("#right").css('background-image','url("'+ urlIndepth + 'images/box'+(key+1)+'/left.jpg")');
			}
		});
	});

	$('#indepth_footer').waypoint(function(direction) {
		if(direction=='down'){
			$(".indepth_share").fadeOut("slow");
		}else{
			 $(".indepth_share").fadeIn("slow");
		}
	},{offset: 'bottom-in-view'});

	loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

function autoplay(vcode){
	"use strict";
  	$("#video_yt_cont").html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}