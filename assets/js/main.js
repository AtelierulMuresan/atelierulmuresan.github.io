/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
//				var slideIndex = 0;
		//Slideshow
//		$("#slideshow > div:gt(0)").hide();

//		setInterval(function() { 
//  			$('#slideshow > div:first')
 // 			.fadeOut(1000)
  //			.next()
  //			.fadeIn(1000)
  	//		.end()
  	//		.appendTo('#slideshow');
	//	}, 3000);		

		
})(jQuery);
$(function() {
	$(".img-w").each(function() {
	  $(this).wrap("<div class='img-c'></div>")
	  let imgSrc = $(this).find("img").attr("src");
	   $(this).css('background-image', 'url(' + imgSrc + ')');
	})
			  
	
	$(".img-c").click(function() {
	  let w = $(this).outerWidth()
	  let h = $(this).outerHeight()
	  let x = $(this).offset().left
	  let y = $(this).offset().top
	  
	  
	  $(".active").not($(this)).remove()
	  let copy = $(this).clone();
	  copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
	  $(".active").css('top', y - 8);
	  $(".active").css('left', x - 8);
	  
		setTimeout(function() {
	  copy.addClass("positioned")
	}, 0)
	  
	}) 
	
	
  
	
  })
  
  $(document).on("click", ".img-c.active", function() {
	let copy = $(this)
	copy.removeClass("positioned active").addClass("postactive")
	setTimeout(function() {
	  copy.remove();
	}, 500)
  })
// cookie policy
$(document).on('ready', function() {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $('.cookie-overlay').removeClass('d-none').addClass('d-block');
  }

  $('.accept-cookies').on('click', function() {
    document.cookie = "accepted_cookies=yes;"
    $('.cookie-overlay').removeClass('d-block').addClass('d-none');
  })

  // expand depending on your needs
  $('.close-cookies').on('click', function() {
    $('.cookie-overlay').removeClass('d-block').addClass('d-none');
  })
})
  </p>
  <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.min.js"></script>
  <script language="javascript">
      $(function() {
          toastr.options = {
             "closeButton": true,
             "debug": false,
             "positionClass": "toast-bottom-right",
             "showDuration": "300",
             "hideDuration": "1000",
             "timeOut": "0",
             "extendedTimeOut": "1000",
             "showEasing": "swing",
             "hideEasing": "linear",
             "showMethod": "fadeIn",
             "hideMethod": "fadeOut"
          }
    toastr.info("<p'>Cookies help us deliver our services. By using our services, you agree to our use of cookies. <a href='#' target='_new'>More details</a></p>");
      });
  </script>
