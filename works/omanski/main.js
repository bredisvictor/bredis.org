//gallery menu
jQuery(document).ready(function($){
$(".lightgalery").lightGallery();
});
(function($) {
$(function() {
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
$(this)
.addClass('active').siblings().removeClass('active')
.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
});
})(jQuery);
//scroll menu
$(document).ready(function(){
var $menu = $("#menu");
 $(window).scroll(function(){
if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
$menu.removeClass("fixed").addClass("default");
}
});
});
//scroll menu go top speed
$(document).ready(function() {
$("a.ancLinks").click(function () { 
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
$('html,body').animate( { scrollTop: destination }, 600 );
return false;
});
});
//parallax background
jQuery(document).ready(function(){
$objWindow = $(window);
$('div[data-type="background"]').each(function(){
if(document.documentElement.clientWidth > 480) {
var $bgObj = $(this);
$(window).scroll(function() {
var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
var coords = '0%'+ yPos*3 + 'px';
$bgObj.css({ backgroundPosition: coords });;
});
}
});
});
//parallax text
$(window).scroll(function(){
 var st = $(this).scrollTop();
    $("#omanski .text").css({
        "transform" : "translate(0% ,"+st/3.5+"%"
    });
});

//animate css
new WOW().init();
//scrollorama
$(document).ready(function() {		
		var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
scrollorama.animate('#title',{ 
    duration:100,  property:'opacity', start:0, end:1
})
	});
