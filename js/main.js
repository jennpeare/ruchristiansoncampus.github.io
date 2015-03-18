// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    var currentPath = location.pathname.replace(/^\//,'');
    var thisPath = this.pathname.replace(/^\//,'');
    if (currentPath == thisPath && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });

  $('.flaticon-down139').click(function() {
    var target = $('#activities');
    $('html,body').animate({
      scrollTop: target.offset().top - 80
    }, 1000);
  });
});
