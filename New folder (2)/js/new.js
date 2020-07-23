$(function(){
  'use strict';
  //scroll
  $('header i').click(function(){
    $('html,body').animate({
      scrollTop:$('.featuer').offset().top},2000);
  });
});
$(function(){
  $('.navbar-right li a').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop:  $('#'+$(this).data('scroll')).offset().top
    },1000);
  });
  $('.navbar-right li a').click(function(){
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  });
});
$(function(){
  'use strict';
  $(window).scroll(function(){
      var navbar = $('.navbar');
      if (Math.round($(window).scrollTop()) > 200){
          navbar.addClass('scrolled');
      }else{
          navbar.removeClass('scrolled');
      }
      
      });
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function () {
    $('#back-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
  });