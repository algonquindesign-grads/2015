$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }
});


var $about = $('.about');
var $topNav = $('.top-nav')

if (window.screen.width >= 768) {
	$about.waypoint(function (direction) {
		if (direction == 'down') {
			$topNav.addClass('sticky-nav');
		} else {
			$topNav.removeClass('sticky-nav');
		}
	}, { offset: '150px'});
}


// OVERLAY

var $studentClick = $('.student a');
var $cover = $('#cover');
var $closeOverlay = $('.close-overlay');
var $body  = $('body');


$studentClick.on('click', function(event){
	event.preventDefault();
	$cover.addClass('overlay');
	$body.addClass('noscroll');
});

$closeOverlay.click(function(event){
	event.preventDefault();
	$cover.removeClass('overlay');
	$body.removeClass('noscroll');
});
