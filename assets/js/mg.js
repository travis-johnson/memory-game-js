// function flip() {
//     $('.card').toggleClass('card-flipped');
// }


// $('.card').click(function(){
//   $(this).find('.card').addClass('.card-flipped')
// });


$('.card').on('click', function () {
  $(this).addClass("rotate");
  var flipped = $('.rotate')
  if  (flipped.length <= 2){
      var firstCard = flipped.first();
      var secondCard = flipped.last();
  {
  if (firstCard.text() != secondCard.text()) {
     setTimeout(function(){ $('.card').toggleClass("rotate") }, 500);

    console.log('aw snap!')
 }
 }
 }
 });


var minTime = document.getElementById("minute");
var secTime = document.getElementById("seconds");
var total = 0;
setInterval(setTime, 1000);

function setTime()
{
  ++total;
  secTime.innerHTML = pad(total%60);
  minTime.innerHTML = pad(parseInt(total/60));
}

function pad(val)
{
  var valString = val + "";
  if (valString.length < 2)
{
  return "0" + valString;
}
else
{
    return valString;
  }
};
















//if you click the first card then click the second and the second does not match
//flip over the second card.







// $('.card').on('click', function () {
//     $(this).addClass("rotate");
//     if ("div:contains('1')" != "div:contains('2')"){
//         $('.card').toggleClass("rotate")
//        console.log('aw snap!')
// }
//   });


// if ( "div:contains('camera')" ).toggleClass( 'rotate' );
// console.log('ish works!!!')
