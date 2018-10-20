$('.main').click(function(e){
  e.preventDefault();
  $('div.detail').hide("fast");
  $('.detail' + $(this).children("div").attr("id")).show("fast").css('display', 'flex');
});
