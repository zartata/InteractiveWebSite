$(document).ready(function() {
	// Get the width and height of the browser window.
	var windowW = $(window).width();
	var windowH = $(window).height();
	
	// Set up the page_container div so that it has 5px of padding on all sides.
	$('#page_container').width(windowW - 12);
	$('#page_container').height(windowH - 10);
	$('#page_container').css('padding', 5);
});