$("#logo").click(function() {
    $('html, body').animate({
        scrollTop: $(".slides").offset().top -90
    }, 1000);
});
$("#howItWorks").click(function() {
    $('html, body').animate({
        scrollTop: $(".worksFolder").offset().top -90
    }, 1000);
});

$("#gettingStarted").click(function() {
	var top =  $(".start").offset().top -90;
	var speed = 1000;
	var animateOptions = {
        scrollTop: top
    };
    $('html, body').animate(animateOptions, speed);

});
$("#track").click(function() {
    $('html, body').animate({
        scrollTop: $(".Track").offset().top -50
    }, 1000);
});
$("#MoreInfo").click(function() {
    $('html, body').animate({
        scrollTop: $(".info").offset().top -90
    }, 1000);
});
$("#register").click(function() {
    $('html, body').animate({
        scrollTop: $(".tab-content").offset().top -90
    }, 1000);
});
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});