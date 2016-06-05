// function flip() {
//     $('.card').toggleClass('card-flipped');
// }


// $('.card').click(function(){
//   $(this).find('.card').addClass('.card-flipped')
// });


$('.card').on('click', function () {
  $(this).addClass("rotate");
  if  ("div:contains('1')" != "div:contains('2')"){
     setTimeout(function(){ $('.front').addClass("rotate") }, 2000);

    console.log('aw snap!')
 }
 });
    // $(this).addClass("rotate");
//   var flipped = $('.rotate');
//   if (flipped.length <= 2){
//     var firstCard = flipped.first();
//     var secondCard = flipped.last();
// {












// $('.card').on('click', function () {
//     $(this).addClass("rotate");
//     if ("div:contains('1')" != "div:contains('2')"){
//         $('.card').toggleClass("rotate")
//        console.log('aw snap!')
// }
//   });


// if ( "div:contains('camera')" ).toggleClass( 'rotate' );
// console.log('shit works!!!')
