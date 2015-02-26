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
var $student = $('.student');
var $studentLink = $('.student a');
var $cover = $('#cover');
var $closeOverlay = $('.close-overlay');
var $body  = $('body');
var $stuName = $('.student-name');
var $lbPic = $('.lightbox-pic');
var $hpPic = $('.homepage-pic');
var $skillA = $('.skill-a');
var $skillB = $('.skill-b');
var $skillC = $('.skill-c');
var $socialA = $('.social-a');
var $socialB = $('.social-b');
var $socialC = $('.social-c');
var $site = $('.site');
var $email = $('.email');
var $nxtStudent = $('.next-student');
var $prvStudent = $('.prev-student');

// portfolio pieces
var $portImg1 = $('.portfolio-img-1')
var $portImg2 = $('.portfolio-img-2')
var $portImg3 = $('.portfolio-img-3')
var $portImg4 = $('.portfolio-img-4')


$studentLink.on('click', function(event, i){
	event.preventDefault();
	$cover.addClass('overlay');
	$body.addClass('noscroll');
	var studentdata = $(this).attr('data-index');
	$('.next-student').attr('data-index', studentdata + 1);
	$stuName.html(people.student[studentdata].name);
	$lbPic.attr('src', 'http://grads.images.algonquindesign.ca/2015/lightbox/' + people.student[studentdata].id + '-lightbox.jpg');
	$site.html(people.student[studentdata].website);
	$email.html(people.student[studentdata].email);
	$portImg1.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-1.jpg');
	$portImg2.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-2.jpg');
	$portImg3.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-3.jpg');
	$portImg4.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-4.jpg');
});

$nxtStudent.click(function(event) {
	event.preventDefault();
});

$prvStudent.click(function(event) {
	event.preventDefault();
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





