$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});

$(function(){
    $('.carousel').carousel({
      interval: 2000
    });
});