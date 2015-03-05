var $vid = $('.trailer');
var $tgglVid = $('.toggle-video');
var $topLogo = $('.hp-cont .logo');
var $arrow = $('.front .arrow');
var $frontWrp = $('.front-wrap');
var $fullVid = $('.full-vid');


$fullVid.prop('muted', false);

$tgglVid.click(function(e) {
	e.preventDefault();
	$topLogo.toggleClass('hide');
	$arrow.toggleClass('hide');
	$fullVid.toggleClass('show-vid');
	$frontWrp.toggleClass('remove-bg');
	if ( $vid.get(0).paused ) {
	 $vid.get(0).play();
	} else {
		$vid.get(0).pause();
	}
});


var hashTagActive = "";
$(document).ready(function() {
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
var $topNav = $('.top-nav');
var $front = $('.front');

if (window.screen.width >= 768) {
	$about.waypoint(function (direction) {
		if (direction == 'down') {
			$topNav.addClass('sticky-nav');
			$front.addClass('sn-comp');
		} else {
			$topNav.removeClass('sticky-nav');
			$front.removeClass('sn-comp');
		}
	}, { offset: '150px'});
}

// OVERLAY
var $student = $('.student');
var $studentLink = $('.student a');
var $cover = $('#cover');
var $closeOverlay = $('.close-overlay');
var $body  = $('body');
var $html = $('html');
var $stuName = $('.student-name');
var $lbPic = $('.lightbox-pic');
var $hpPic = $('.homepage-pic');
var $skill = $('.skill');
var $socialA = $('.social-a');
var $socialB = $('.social-b');
var $socialC = $('.social-c');
var $site = $('.site');
var $email = $('.email');
var $nxtStudent = $('.next-student');
var $prvStudent = $('.prev-student');

// portfolio pieces
var $portImg1 = $('img.portfolio-img-1');
var $portImg2 = $('img.portfolio-img-2');
var $portImg3 = $('img.portfolio-img-3');
var $portImg4 = $('img.portfolio-img-4');

var $portIframe1 = $('iframe.portfolio-img-1');
var $portIframe2 = $('iframe.portfolio-img-2');
var $portIframe3 = $('iframe.portfolio-img-3');
var $portIframe4 = $('iframe.portfolio-img-4');

// Social Links
var $fb = $('.facebook');
var $beh = $('.behance');
var $drib = $('.dribbble');
var $git = $('.github');
var $ist = $('.instagram');
var $lnk = $('.linkedin');
var $pin = $('.pinterest');
var $twt = $('.twitter');
var $vim = $('.vimeo');

$studentLink.on('click', function (event, i) {
	event.preventDefault();
	$cover.addClass('overlay');
	$html.addClass('noscroll');
	var studentdata = parseInt($(this).attr('data-index'), 10);
	upDateNextPrv(studentdata)
	changeStudent(studentdata);
	socialChange(studentdata);
});

$nxtStudent.click(function (event) {
	event.preventDefault();
	var studentdata = parseInt($(this).attr('data-index'), 10);
	upDateNextPrv(studentdata);
	changeStudent(studentdata);
	socialChange(studentdata);
});

$prvStudent.click(function (event) {
	event.preventDefault();
	var studentdata = parseInt($(this).attr('data-index'), 10);
	upDateNextPrv(studentdata);
	changeStudent(studentdata);
	socialChange(studentdata);
});

var changeStudent = function (studentdata) {
	$stuName.html(people.student[studentdata].name.full);
	$lbPic.attr('src', 'http://grads.images.algonquindesign.ca/2015/lightbox/' + people.student[studentdata].id + '-lightbox.jpg');
	$site.html(people.student[studentdata].website);
	$email.html(people.student[studentdata].email);
	$skill.html(people.student[studentdata].skills);

	if (people.student[studentdata].works[0].length == 1) {
		// Plain image
		$portImg1.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-' + people.student[studentdata].works[0] + '.jpg');
		$portImg1.show();
		$portIframe1.hide();
	} else { // Vimeo
		$portIframe1.attr('src', people.student[studentdata].works[0]);
		$portImg1.hide();
		$portIframe1.show();
	}

		if (people.student[studentdata].works[1].length == 1) {
		// Plain image
		$portImg2.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-' + people.student[studentdata].works[1] + '.jpg');
		$portImg2.show();
		$portIframe2.hide();
	} else { // Vimeo
		$portIframe2.attr('src', people.student[studentdata].works[1]);
		$portImg2.hide();
		$portIframe2.show();
	}

		if (people.student[studentdata].works[2].length == 1) {
		// Plain image
		$portImg3.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-' + people.student[studentdata].works[2] + '.jpg');
		$portImg3.show();
		$portIframe3.hide();
	} else { // Vimeo
		$portIframe3.attr('src', people.student[studentdata].works[2]);
		$portImg3.hide();
		$portIframe3.show();
	}

		if (people.student[studentdata].works[3].length == 1) {
		// Plain image
		$portImg4.attr('src', 'http://grads.images.algonquindesign.ca/2015/portoflio-pieces/' + people.student[studentdata].id + '-' + people.student[studentdata].works[3] + '.jpg');
		$portImg4.show();
		$portIframe4.hide();
	} else { // Vimeo
		$portIframe4.attr('src', people.student[studentdata].works[3]);
		$portImg4.hide();
		$portIframe4.show();
	}


}

var socialChange = function (studentdata) {
	if (people.student[studentdata].facebook) {
		$fb.show();
		$fb.children("a").attr('href', people.student[studentdata].facebook);
	} else {
		$fb.hide();
	}

	if (people.student[studentdata].behance) {
		$beh.show();
		$beh.children("a").attr('href', people.student[studentdata].behance);
	} else {
		$beh.hide();
	}

	if (people.student[studentdata].dribbble) {
		$drib.show();
		$drib.children("a").attr('href', people.student[studentdata].dribbble);
	} else {
		$drib.hide();
	}

	if (people.student[studentdata].github) {
		$git.show();
		$git.children("a").attr('href', people.student[studentdata].github);
	} else {
			$git.hide();
	}

	if (people.student[studentdata].instagram) {
		$ist.show();
		$ist.children("a").attr('href', people.student[studentdata].instagram);
	} else {
		$ist.hide();
	}

	if (people.student[studentdata].linkedin) {
		$lnk.show();
		$lnk.children("a").attr('href', people.student[studentdata].linkedin);
	} else {
		$lnk.hide();
	}

	if (people.student[studentdata].pinterest) {
		$pin.show();
		$pin.children("a").attr('href', people.student[studentdata].pinterest);
	} else {
		$pin.hide();
	}

	if (people.student[studentdata].twitter) {
		$twt.show();
		$twt.children("a").attr('href', people.student[studentdata].twitter);
	} else {
		$twt.hide();
	}

	if (people.student[studentdata].vimeo) {
		$vim.show();
		$vim.children("a").attr('href', people.student[studentdata].vimeo);
	} else {
		$vim.hide();
	}

	if (people.student[studentdata].website) {
		$site.attr('href', people.student[studentdata].website);
	}
	if (people.student[studentdata].email) {
		$email.attr('href', 'mailto:' + people.student[studentdata].email);
	}

}

var upDateNextPrv = function (id) {
	var nxt = id + 1;
	var prv = id - 1;

	if (nxt > people.student.length - 1) {
		nxt = 0;
	}

	if (prv < 0) {
		prv = people.student.length - 1;
	}

	$nxtStudent.attr('data-index', nxt);
	$prvStudent.attr('data-index', prv);
}

$closeOverlay.click(function (event) {
	event.preventDefault();
	$cover.removeClass('overlay');
	$html.removeClass('noscroll');
});

$(document).keydown(function (e) {
	switch(e.keyCode) {
		case 27:
			$cover.removeClass('overlay');
			$html.removeClass('noscroll');
		break;
		case 39:
			var studentdata = parseInt($nxtStudent.attr('data-index'), 10);
			upDateNextPrv(studentdata);
			changeStudent(studentdata);
			socialChange(studentdata);
		break;
		case 37:
			var studentdata = parseInt($prvStudent.attr('data-index'), 10);
			upDateNextPrv(studentdata);
			changeStudent(studentdata);
			socialChange(studentdata);
		break;
	}
});


// var $sbCont = $('.student-box');

// $sbCont.click(function() {
// 	$cover.removeClass('overlay');
// 	$html.removeClass('noscroll');
// });
