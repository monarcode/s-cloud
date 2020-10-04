$(document).ready(function(){
    $(window).scroll(function(){
      let srcl = $(window).scrollTop();

      $("#navbar").toggleClass("shadow",srcl>50);
    })
  })