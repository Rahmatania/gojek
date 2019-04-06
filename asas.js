jQuery(function($) {'use strict';

	//Resvonsive Nav
	$('li.dropdown').find('.fa-angel-down').each(function(){
		$(this).on('click', function(){
			if($(window).width()<768){
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if($('#video-container').length){
		$("video-container").fitVids();
	}

	//initiat WOW JS
	new WOW().init();

	//portofolio filter
	$(window).load(function(){
		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if($('.masonery_area').length){
			$('.masonery_area').masonry();//Masonry
		}
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		
		if($portfolio_selectors.length){

			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-items',
				layoutMode: 'fitRows'
			});

			$portfolio_selectors.on('click', function(){
					$portfolio_selectors.removeClass('active');
					$(this).addClass('active');
					var selector =$(this).attr('data-filter');
					$portfolio.isotope({filter:selector});
					return false;
				});
		}
	});

	$('.timer').each(count);
	function count(options){
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countTo Options') || {}); 
		$this.countTo(options);
	}
	//search
	$('.fa-search').on('click',function() {
		$('.field-toggle').fadeToggle(200);
	});

	//Conttact Form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class ="form_status"></div>');
			$.ajax({
				url: $(this).attr('action'),
				beforeSend: function(){
					form.prepend(form_status.html('<p> <i class="fa fa-spinner fa-spin"></i>Email is sending...</p>').fadeln());
				}
			}).done(function(data){
				form_status.html('<p class="text-succes">Thank you for contact us. As early as possible we will contact you </p>').delay(3000).fadeOut();
			});
		});
	// Progress Bar
	$.each($('div.Progress-bar'), function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});
	
	if($('#gmap').length) {
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 43.04446,
			lng:-76.130791,
			scrollwheel:false,
			zoom: 16,
			ZoomControl:false,
			panControl:false,
			streetViewControl:false,
			mapTypeControl:false,
			overviewMapControl:false,
			clickable:false
		});

		map.addMarker({
			lat:43.04446,
			lng:-76.130791,
			animation: google.maps.Animation.DROP,
			verticalAlign:'bottom',
			horizontalAlign:'center',
			backgroundColor: '#3e8bff',
		});
	}
});

			
			


