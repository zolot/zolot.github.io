$(document).ready(function() {

/*	var time = 1000;
	var active_element_index = 0;
    var prev_index = 0;
    var skills = $('#skills span');
    var skills_count = skills.length;
    // circle();

	function circle() { 
		var active_skill = skills.eq(active_element_index);
        skills.css({'background-color': '#F9FA7A'})
    	active_skill.css({'background-color': '#000'})

        if (active_element_index == skills_count-1) {
            active_element_index = 0;
        } else {
            active_element_index++;
        }
    }  
    var myTimer = setInterval(circle, time); */


	$(".nav a").mPageScroll2id({
		scrollSpeed : 200
	});



	$('.popup').magnificPopup();

	$("#menu-button").click(function() {
		$(".nav ul").slideToggle();
	});


function wResize() {
		$("header").css("height", $(window).height());
		$(".section-border-top").css("border-left-width", $(window).width());
		$(".section-border-bottom").css("border-right-width", $(window).width());
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

$(window).load(function() {
	$(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

	$(".top_text, #skills h2, #skills p, #how_work h2, #portfolio h2, #portfolio h3, #contacts h2").animated("zoomIn","zoomIn")
	$(".left .resume_item").animated("fadeInLeft","fadeInLeft")
	$(".right .resume_item").animated("fadeInRight","fadeInRight")
});