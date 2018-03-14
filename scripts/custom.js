(function($, window, document) {
	"use strict";
	/**
		Takes the element class or id as a string e.g. ".menu", "#id"
		returns the top position relative to the scroll
	*/
	function calculateTopPositionForElement(element) {
		return $(element).offset().top - (window.scrollY || window.pageYOffset || document.body.scrollTop);
	}

	function shouldMenuBeSticky() {
		if(calculateTopPositionForElement(".menu") <= 50) {
			if(!$(".menu").hasClass("sticky")) {
				$(".menu").addClass("sticky");
			}
		} else {
			if($(".menu").hasClass("sticky")) {
				$(".menu").removeClass("sticky");
			}
		}
	}

	function hashChangeEvent(hash) {
		if(hash) {
			$(".menu li.active").removeClass("active");
			var safeHash = hash.replace("#", "");
			if(safeHash) {
				$("."+safeHash).addClass("active");
			}
		} else {
			$(".menu li.home").addClass("active");
		}
	}

	function updateMenuItem() {

		var updateItem = function(className) {
			$(".menu li.active").removeClass("active");
			$(".menu li"+className).addClass("active");
		};

		if($("#home").isInViewport()) {
			updateItem(".home");
		} else if($("#about").isInViewport()) {
			updateItem(".about");
		} else if($("#work").isInViewport()) {
			updateItem(".work");
		} else if($("#contact").isInViewport()) {
			updateItem(".contact");
		}

	}

	$.fn.isInViewport = function() {
	    var elementTop = $(this).offset().top;
	    var elementBottom = elementTop + $(this).outerHeight();

	    var viewportTop = $(window).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();
	    
	    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(document).ready(function() {
		shouldMenuBeSticky();
		updateMenuItem();

		// Remove any other links that have the active class
		hashChangeEvent(window.location.hash);
		// Menu Clicks
		$(".menu li a, .hero a").on("click", function(e) {

			// Remove any other links that have the active class
			hashChangeEvent($.attr(this, "href"));

			$("html").animate({
				scrollTop: ($($.attr(this, "href")).offset().top - 150)
			}, 600);
		});

		// Make our menu sticky when a scroll point is reached
		$(document).on("scroll", function() {
			shouldMenuBeSticky();
			updateMenuItem();
		});
	});

} (jQuery, window, document) );