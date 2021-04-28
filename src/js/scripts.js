$('.carousel').carousel({
     interval : 1000,
     pause : false,
     wrap : false
});

$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  
    },
    allowPageScroll:"vertical"
  
  });
   
   