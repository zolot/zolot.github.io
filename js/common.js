$(document).ready(function() {

	$(".nav a").mPageScroll2id({
		scrollSpeed : 200
	});

	$(window).load(function() {
	$(".top_text, #skills h2, #skills p, #how_work h2, #portfolio h2, #portfolio h3, #contacts h2, #contacts p, .descr-cont").animated("zoomIn","zoomIn")
	$(".left .resume_item").animated("fadeInLeft","fadeInLeft")
	$(".right .resume_item").animated("fadeInRight","fadeInRight")
});

	$('.popup').magnificPopup();

	$("#menu-button").click(function() {
		$(".nav ul").slideToggle();
	});


function wResize() {
		$("header").css("height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

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