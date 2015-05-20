$(document).ready(function() {
	// Get the width and height of the browser window.
	var windowW = $(window).width();
	var windowH = $(window).height();
	
	// Set up the page_container div so that it has 5px of padding on all sides.
	$('#page_container').width(windowW - 12);
	$('#page_container').height(windowH - 10);
	$('#page_container').css('padding', 5);
	
	// Set up the width of the header to the right of the logo to add 5px of space on the logo's right.
	$('#header_options_container').width($('#header_bar').width() - 62);
	$('#header_options_container').css('left', 62);
	$('#header_options_container').css('top', -53);
	
	// Set the height of the editing area to fit under the tab container.
	$('#editing_area').height($('#editor').height() - 31);
	
	// Disable spellcheck for the HTML textarea.
	// Declaring spellcheck='false' in the HTML will only disable the spellcheck
	// once that contenteditable div is focused, so do it with JavaScript to do it "immediately".
	$('#html_textarea')[0].spellcheck = false;
	$('#html_textarea')[0].focus();
	$('#html_textarea')[0].blur();
	// Disable spellcheck for CSS textarea.
	$('#css_textarea')[0].spellcheck = false;
	$('#css_textarea')[0].focus();
	$('#css_textarea')[0].blur();
	// Disable spellcheck for JavaScript textarea.
	$('#javascript_textarea')[0].spellcheck = false;
	$('#javascript_textarea')[0].focus();
	$('#javascript_textarea')[0].blur();
	
	// Set the height and width of the HTML, CSS, and JavaScript "pages"
	// to compensate for the 12px of "padding" on all sides set by CSS.
	$('.editor_textarea').width($('.editing_slab').width() - 24);
	$('.editor_textarea').height($('.editing_slab').height() - 24);
	
	// Change tab stylings when HTML tab is clicked.
	$('#html_tab').click(function() {
		// Change HTML tab.
		$('#html_tab').css('border-bottom', '1px solid white');
		$('#html_tab').css('color', 'rgba(0, 0, 255, 1)');
		$('#html_tab').css('font-style', 'italic');
		// Change CSS tab.
		$('#css_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#css_tab').css('color', 'rgba(0, 150, 0, 0.8)');
		$('#css_tab').css('font-style', 'normal');
		// Change JavaScript tab.
		$('#javascript_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#javascript_tab').css('color', 'rgba(150, 0, 0, 0.8)');
		$('#javascript_tab').css('font-style', 'normal');
		// Move the HTML page to the top and the others below.
		$('#editing_area_html').css('z-index','10');
		$('#editing_area_css').css('z-index','9');
		$('#editing_area_javascript').css('z-index','8');
		// Focus on the HTML textarea.
		$('#html_textarea').focus();
	});
	// Change tab stylings when CSS tab is clicked.
	$('#css_tab').click(function() {
		// Change CSS tab.
		$('#css_tab').css('border-bottom', '1px solid white');
		$('#css_tab').css('color', 'rgba(0, 200, 0, 1)');
		$('#css_tab').css('font-style', 'italic');
		// Change HTML tab.
		$('#html_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#html_tab').css('color', 'rgba(0, 0, 150, 0.8)');
		$('#html_tab').css('font-style', 'normal');
		// Change JavaScript tab.
		$('#javascript_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#javascript_tab').css('color', 'rgba(150, 0, 0, 0.8)');
		$('#javascript_tab').css('font-style', 'normal');
		// Move the CSS page to the top and the others below.
		$('#editing_area_html').css('z-index','8');
		$('#editing_area_css').css('z-index','10');
		$('#editing_area_javascript').css('z-index','9');
		// Focus on the CSS textarea.
		$('#css_textarea').focus();
	});
	// Change tab stylings when JavaScript tab is clicked.
	$('#javascript_tab').click(function() {
		// Change JavaScript tab.
		$('#javascript_tab').css('border-bottom', '1px solid white');
		$('#javascript_tab').css('color', 'rgba(225, 0, 0, 1)');
		$('#javascript_tab').css('font-style', 'italic');
		// Change HTML tab.
		$('#html_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#html_tab').css('color', 'rgba(0, 0, 150, 0.8)');
		$('#html_tab').css('font-style', 'normal');
		// Change CSS tab.
		$('#css_tab').css('border-bottom', '1px solid rgba(150, 0, 0, 0.6)');
		$('#css_tab').css('color', 'rgba(0, 150, 0, 0.8)');
		$('#css_tab').css('font-style', 'normal');
		// Move the JavaScript page to the top and the others below.
		$('#editing_area_html').css('z-index','9');
		$('#editing_area_css').css('z-index','8');
		$('#editing_area_javascript').css('z-index','10');
		// Focus on the JavaScript textarea.
		$('#javascript_textarea').focus();
	});
	
	function parseAndUpdateHTMLEditor()
	{
		var htmlText = $('#html_textarea')[0].value;
		var lowercaseHtmlText = htmlText.toLowerCase();
	}
	
});