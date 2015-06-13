var main = function() {
  /* Bring up menus */
  $('.reg').click(function() {
    $('.register').animate({
      top: "40%"
    }, 0);

    $('.login').animate({
      top: "-40%"
    }, 0);
  });

  $('.log').click(function() {
    $('.login').animate({
      top: "40%"
    }, 0);

    $('.register').animate({
      top: "-40%"
    }, 0);
  });

  /* Hide menus */
  $('html').click(function() {
  	$('.login').animate({
      top: "-40%"
    }, 0);

    $('.register').animate({
      top: "-40%"
    }, 0);
  });

  $('.login').click(function(event){
	event.stopPropagation();
	});

  $('.register').click(function(event){
	event.stopPropagation();
	});

  $('.log').click(function(event){
	event.stopPropagation();
	});

  $('.reg').click(function(event){
	event.stopPropagation();
	});


}

$(document).ready(main);