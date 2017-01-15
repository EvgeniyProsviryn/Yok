$(function() {

	$(".home").click(function(){
		$('html,body').animate({
			scrollTop: 0
		},2000)
	});

	$(".destination").click(function(){
		$('html,body').animate({
			scrollTop: $('.destination-wrap').offset().top
		},2000)
	});

	$(".ittinary").click(function(){
		$('html,body').animate({
			scrollTop: $('.ittinery-container').offset().top
		},2000)
	});

	$(".review").click(function(){
		$('html,body').animate({
			scrollTop: $('.city-wrapp').offset().top
		},2000)
	});

	$(".contact").click(function(){
		$('html,body').animate({
			scrollTop: $('.map-filter').offset().top
		},2000)
	});

	$(".drag-list li").draggable({
		hoverClass: "active",
		containment: "document",
		revert: true,
		start: function(){
			contents = $(this).find(".d-title").text();
		}
	});

	$(".dropdown.drop-day1").droppable({
		drop: function(){
			var container = '<div class="col-md-12 col-sm-12 col-xs-12"><div class="drop-value"><div class="drop-icon"></div><span class="drop-text">'+contents+'</span><span class="drop-time">03.30 - 09.00</span></div><div class="col-md-12 col-sm-12 col-xs-12"><ul class="dest-add">	</ul></div><div class="col-md-12 col-sm-12 col-xs-12"><div class="subs-button "><a href="#test-modal2" class="popup-modal">add sub destination</a> <i class="fa fa-plus-circle" aria-hidden="true"></i></div></div></div>' 

			$(".day1-blocks").append(container);
		}
	});

	$(".dropdown.drop-day2").droppable({
		drop: function(){
			var container = '<div class="col-md-12 col-sm-12 col-xs-12"><div class="drop-value"><div class="drop-icon"></div><span class="drop-text">'+contents+'</span><span class="drop-time">03.30 - 09.00</span></div><div class="col-md-12 col-sm-12 col-xs-12"><ul class="dest-add">	</ul></div><div class="col-md-12 col-sm-12 col-xs-12"><div class="subs-button "><a href="#test-modal2" class="popup-modal">add sub destination</a> <i class="fa fa-plus-circle" aria-hidden="true"></i></div></div></div>' 

			$(".day2-blocks").append(container);
		}
	});

	$("#test-modal2 .popup-modal-dismiss").click(function(){
		var inputval = $(".modal-input").val();
		$(".dest-add").append("<li>"+inputval+"</li>")
	});
	
	$(".pagination li a").click(function(){
		$(".pagination li a").removeClass("active");
		$(this).addClass("active");
	});

	$(".filter span").click(function(){
		$(".filter span").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$(".desc-menu li").click(function(){
		$(".desc-menu li").removeClass("active");
		$(this).addClass("active")
	});

	$(".menu-button").click(function(){
		$(".mob-menu-wrapp").toggleClass("active");
		$(".menu-button").toggleClass("active");
		var mobMenuHeight = $('.mob-menu').height()/2*-1 + "px" 

		$(".mob-menu").css("margin-top",mobMenuHeight);
	})

	$(".mob-menu li").click(function(){
		$(".mob-menu-wrapp").removeClass("active");
		$(".menu-button").removeClass("active");
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
