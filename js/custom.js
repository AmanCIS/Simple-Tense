// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade"
  });
});

/**Match Height**/
$(window).ready(function(e) {
  $(document).ready(function(e) {
	  matH();	
  });
  $(window).bind("resize",function(){
	  matH();
  })
  function matH(){
	  setTimeout(function(){
			  $('.student-talk-height-wrap,.get_know_wrap').each(function() {
				$(this).children('.stud-talk-height,.get-height').matchHeight();
			  });
	  },100);
  };
  
/**Footer height**/
  $(document).ready(function(e) {
	  matFH();	
  });
  $(window).bind("resize",function(){
	  matFH();
  })
  function matFH(){
	  $('.footer-block-menu').matchHeight();
  };
  
/***About Height**/
  $(document).ready(function(e) {
	  matAH();	
  });
  $(window).bind("resize",function(){
	  matAH();
  })
  function matAH(){
	  $('.about-height').matchHeight();
  };
  
/***commit Height**/
  $(document).ready(function(e) {
	  matCH();	
  });
  $(window).bind("resize",function(){
	  matCH();
  })
  function matCH(){
	  $('.commit-height').matchHeight();
  };  
  
  
/**Footer plus**/  
  $(document).ready(function(e) {
	var footTop=$('.footer-top'),
	plus=$('.footer-plus');	
	plus.click(function(){
		footTop.slideToggle().toggleClass("Open");		
		$("html, body").animate({ scrollTop: $(document).height()}, "slow");
			return false;		
		});
  });
});


/**Collages slider**/
$(document).ready(function() { 
  var owl = $("#best-collage-slider"); 
  owl.owlCarousel({     
      itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 2],
        [650, 2],
		[700, 4],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 7]
      ],
      navigation : true 
  }); 
});

/**Tool tip**/
$(document).ready(function(e) {
	$('.card-code-tool').tooltip(top)
});







$(document).ready(function(e) {
	(function ($){
      $('#tiles').imagesLoaded(function() {
        function comparatorIsStamped(a, b) {
          var $a = $(a), $b = $(b);
          // Check if tile should be the first one
          if (!$a.hasClass('stamped-first') && $b.hasClass('stamped-first'))
            return 1;
          // Check if tile should be the last one
          if ($a.hasClass('stamped-last') && !$b.hasClass('stamped-last'))
            return 1;
          // Check if tile should the fourth one
          if (!$a.hasClass('stamped-fourth') && $b.hasClass('stamped-fourth') && $a.index() >= 4)
            return 1;
          return -1;
        }

        // Prepare layout options.
        var options = {
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('#main-grid'), // Optional, used for some extra CSS styling
          offset: 20, // Optional, the distance between grid items
          itemWidth: 300, // Optional, the width of a grid item
          comparator: comparatorIsStamped, // Used to sort the items
          direction: 'left' // Set this to 'right' if you want to stamp the 'stamped-first' item to the right
        };

        // Get a reference to your grid items.
        var $handler = $('#tiles li');

        $handler.each(function(i) {
          console.log($(this).index() + ':' + $(this).find('p').text());
        });

        // Call the layout function.
        $handler.wookmark(options);
      });
    })(jQuery);
});

