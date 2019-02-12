(function($, window, document) {
	"use strict";

	$(document).ready(function() {
		/*
			Should the menu be stuck to the top?
			Check here so we can show the menu if someone refreshes the page but a scroll event isn't fired
		*/
		determineMenuLayout();
		determineActiveMenuItem();

		// Menu Clicks
		$(".header a").on("click tap", function(e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: ($($.attr(this, "href")).offset().top - 150)
			}, 600);
		});

		// Make our menu sticky when a scroll point is reached
		$(document).on("scroll", function() {
			// Should the menu be stuck to the top?
			determineMenuLayout();

			// Update the current active tab based on scroll position
			determineActiveMenuItem();
			

		});

		if(window.location.hash) {
			$("html, body").animate({
				scrollTop: ($(window.location.hash).offset().top - 150)
			}, 600);
		}

		$("#contactMe").submit(function(e) {
			e.preventDefault();
			submitContactForm();
		});

	});

	$.fn.isInViewport = function() {
	    var elementTop = $(this).offset().top;
	    var elementBottom = elementTop + $(this).outerHeight();

	    var viewportTop = $(window).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();
	    
	    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	function determineMenuLayout() {
		if(($("#work").offset().top - (window.scrollY || window.pageYOffset || document.body.scrollTop)) <= 150) {
			if(!$(".menu").hasClass("sticky")) {
				$(".menu").addClass("sticky");
			}
		} else {
			if($(".menu").hasClass("sticky")) {
				$(".menu").removeClass("sticky");
			}
		}
	}

	function determineActiveMenuItem() {
		function updateActiveMenuItem(className) {
			$(".menu li.active").removeClass("active");
			$(".menu li"+className).addClass("active");
		};
		
		if($("#home").isInViewport()) {
			updateActiveMenuItem(".home");
		} else if($("#contact").isInViewport()) {
			updateActiveMenuItem(".contact");
		} else if($(".section-work").isInViewport()) {
			updateActiveMenuItem(".work");
		}
	}


	function submitContactForm() {
		var errors = false;
		$("#contactMe .error").removeClass("error");
		$("#contactMe .required").each(function() {
			if($(this).val() === "") {
				$(this).addClass("error");
				errors = true;
			} else {
				if($(this).prop("name") === "email") {
					if(!/[^\s@]+@[^\s@]+\.[^\s@]+/.test($(this).val())) {
						$(this).addClass("error");
						errors = true;
					}
				}
			}
		});

		var fieldValueObject = $("#contactMe").serializeArray();

		if(errors) {
			$("#contactMe .errors").html(""+
				"<i class=\"fas fa-exclamation-triangle\"></i>"+
				"There was an error submiting this form, "+
				"please check the fields and try again.");
			return;
		}
		$("#contactMe .errors").html("");

		$.ajax({
	        url: "contact.php",
	        cache: false,
	        type: 'POST',
	        data: fieldValueObject,
	        beforeSend: function() {
	        	$("#contactMe input, #contactMe textarea").prop("readonly", true);
	        	$("#contactMe button[type=submit").addClass("loading");
	            $("#contactMe button[type=submit").text('Please Wait...');
	            $("#contactMe button[type=submit").attr("disabled", 'disabled');
	        },

	        complete: function(response) {
	        	console.log(response);
	        	var warn = "<i class=\"fas fa-exclamation-triangle\"></i>";
	        	var failureFn = function(msg) {
		        	$("#contactMe input, #contactMe textarea").prop("readonly", false);
		        	$("#contactMe button[type=submit").removeClass("loading");
		            $("#contactMe button[type=submit").text('Send');
		            $("#contactMe button[type=submit").attr("disabled", false);
		            if(msg !== "") {
		            	$("#contactMe .errors").html(msg);
		            }
	        	};
	        	if(response.status == 200) {
	        		try {
		        		var resp = JSON.parse(response.responseText);
		        		if(resp.success === true) {
		        			$("#contactMe").fadeOut(300);
		        			$("#contactMe_success").delay(400).fadeIn(300);
		        		} else {
							var msg = "There was an error submiting this form, "+
							"please check the fields and try again.";
							if(typeof resp.message !== "undefined") {
								msg = resp.message;
							}
		        			failureFn(warn+msg);
		        		}
		        	} catch(e) {
		        		console.error(e);
		        		failureFn(warn+"There was an issue sending the email, please try again shortly.");
		        	}
	        	} else {
	        		failureFn(warn+"The form was unable to submit due to an unknown error! Status: " + response.status);
	        	}
	        }
	    });
	}

} (jQuery, window, document) );
