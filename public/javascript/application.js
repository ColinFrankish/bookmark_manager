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
	$(".star.solid").click(function(event) {
		var link = $(this).parent();
		var favourited = !!$(link).data("favourited");
		var newOpacity = favourited ? 0 : 1;
		$(link).data("favourited", !favourited);
		$(this).animate({opacity: newOpacity}, 1000);
	});
}
$(function() {
	addFavouritesHandler();
})