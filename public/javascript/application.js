console.log("hello, makers academy!");
$(function() {  // this is the shortcut to the $(document).ready(function()  -- lets the whole page load before running
	console.log($("*").length); // this is counting the number of html elements in the document.
});

function animateLinks() {
	$('.link').show(1500);
}
$(function() {
	animateLinks();
});

function addFavouritesHandler() {
	$(".star.solid").click(function() {
		$(this).animate({opacity: 1}, 1000);
	});
}
$(function() {
	addFavouritesHandler();
})