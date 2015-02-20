// $('#top').on('click', function(event) {
//     var target = $( $(this).attr('href') );
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 500);
//     }
// });

var hashTagActive = "";
$(document).ready( function() {
	$(".smooth-scroll a").click(function (event) {

		if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
			event.preventDefault();

			//calculate destination place
			var dest = 0;
			if ( $(this.hash).offset().top > $(document).height() - $(window).height() ) {
				dest = $(document).height() - $(window).height();
			}
			else {
				dest = $(this.hash).offset().top;
			}

			//go to destination
			$('html, body').animate({
			    scrollTop: dest
			}, 700, 'swing');

			hashTagActive = this.hash;
		}

	});
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

$(document).keydown(function(e) {
    if (e.keyCode == 27) { // esc keycode
        $cover.removeClass('overlay');
        $body.removeClass('noscroll');
    }
});

