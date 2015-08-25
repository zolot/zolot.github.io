$(document).ready(function() {

	$("#main-nav a").mPageScroll2id({
			scrollSpeed : 300
		});

	var $menu = $("#main-nav");
		$menu_btn = $("#main-menu-btn");

	         $(window).scroll(function(){

                if ( $(this).scrollTop() > 50 && $menu_btn.hasClass("default") ){
                    $menu.removeClass("default").addClass("fixed");
                    $menu_btn.removeClass("default").addClass("fixed");

                } else if($(this).scrollTop() <= 50 && $menu_btn.hasClass("fixed")) {
                    $menu.removeClass("fixed").addClass("default");
                    $menu_btn.removeClass("fixed").addClass("default");

                }


	        });//scroll


	/*$(".nav a").mPageScroll2id({
		scrollSpeed : 200
	});

	$('.popup').magnificPopup();*/


	$("#main-menu-btn").click(function() {
		$("#main-nav ul").slideToggle();
	});

	$(".contacts-box .phone").click(function() {
		$(".phone span").slideToggle();
		$(".header-top-line .contacts-box .phone span").css("display", "inline-block");
		$(".e-mail span").css("display", "none");
	});
	$(".contacts-box .e-mail").click(function() {
		$(".e-mail span").slideToggle();
		$(".header-top-line .contacts-box .e-mail span").css("display", "inline-block");
		$(".phone span").css("display", "none");
	});





	//Цели для Яндекс.Метрики и Google Analytics 
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

