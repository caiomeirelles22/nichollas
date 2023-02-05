$('#card1').click(function() {
  $(this).toggleClass('flipped');
});

$('#card2').click(function() {
  $(this).toggleClass('flipped');
});

$('#card3').click(function() {
  $(this).toggleClass('flipped');
});

$('#card4').click(function() {
  $(this).toggleClass('flipped');
});

$(document).ready(function(){
  var tam = $(window).width();

  if (tam <=768){
    $("#contatos").toggleClass('container');
  }
});




