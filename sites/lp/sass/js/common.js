$(document).ready(function() {

	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	$(".owl-carousel").owlCarousel({
		loop:true,
		responsive : {
		        0 : {
		            items:1,
		            nav:true
		        }
		},
		navText : ""
	});


	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
	/*$(".tab_item").not(":first").hide();*/
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts-top  .tab").click(function() {
		$(".contacts-top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
		$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
		}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this)
		e.preventDefault;
		alert("Спасибо за заявку!");
		setTimeout(function() {
			var magnificPopup = $.magnificPopup.instance; 
			magnificPopup.close();
			ths.trigger("reset");
		}, 1000);
		return false;
	});
	
});

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
});