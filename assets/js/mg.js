// function flip() {
//     $('.card').toggleClass('card-flipped');
// }


// $('.card').click(function(){
//   $(this).find('.card').addClass('.card-flipped')
// });


$('.card').on('click', function () {
    $(this).addClass("rotate");
  var flipped = $('.rotate');
  if (flipped.length === 2){
    var firstCard = flipped.first();
    var secondCard = flipped.last();



    if($('i').attr('id') == $('i').attr('id')){
      console.log('shit works!!!')
    }
  }

});
