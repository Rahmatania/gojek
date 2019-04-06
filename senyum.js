(funcction ($){

//Init Wow
wow=new WOW({
animateClass:'aanimated',
offset: 100
});
wow.init();

//Navigation scrolls
$('.navbar-naav li a').bind('click',function(event){
$(this).closest('li').addClass('active');
var $anchor=$(this);
var nav=$($anchor.attr('href'));
if (nav.length) {
	$('html,body').stop().animate({
		scrollTop:$($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');

		event.preventDefault();
}
});

//About section scroll
$(".overlay-detail a").on('click',function(event){
event.preventDefault();
var hash = this.hash;
$('html,body').animate({
scrollTop:$(hash).offset().top
}, 900, function(){
windoww.location.hash;
});
});

//jQuer to collapse the navbar on scroll
$(window).scroll(function(){
if ($(".navbar-default").offset().top >50){
$(".navbar-fixed-top").addClass("top-nav-collapse");
}else{
	$(".navbar-fixed-top").removeClass("top-nav-collapse");
}
});

//Testimonials Slider
$('.bxslider').bxslider({
adaptiveHeight:true,
mode:'fade'
});

})(jQuery);