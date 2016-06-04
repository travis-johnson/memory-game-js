// function flip() {
//     $('.card').toggleClass('card-flipped');
// }


// $('.card').click(function(){
//   $(this).find('.card').addClass('.card-flipped')
// });


$('.card').on('click', function () {
    $(this).addClass("rotate");
  var flipped = $('.rotate');
  if (flipped.length <= 2){
    var firstCard = flipped.first();
    var secondCard = flipped.last();
    setTimeout(flipped, 2000);
{

} if  ("div:contains('1')" && "div:contains('2')"){
    $('.card').toggleClass("rotate");
   console.log('aw snap!')
}
}
});






// $('.card').on('click', function () {
//     $(this).addClass("rotate");
//     if ("div:contains('1')" != "div:contains('2')"){
//         $('.card').toggleClass("rotate")
//        console.log('aw snap!')
// }
//   });


// if ( "div:contains('camera')" ).toggleClass( 'rotate' );
// console.log('shit works!!!')
