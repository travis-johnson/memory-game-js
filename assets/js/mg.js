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
     setTimeout(function(){ $('.rotate').removeClass("rotate") }, 500);

    console.log('aw snap!')
 }  else (firstCard.text() === secondCard.text())

 }
 }
 });





//CLOCK//
// var minTime = document.getElementById("minute");
// var secTime = document.getElementById("seconds");
// var total = 0;
// setInterval(setTime, 1000);
//
// function setTime()
// {
//   ++total;
//   secTime.innerHTML = pad(total%60);
//   minTime.innerHTML = pad(parseInt(total/60));
// }
//
// function pad(val)
// {
//   var valString = val + "";
//   if (valString.length < 2)
// {
//   return "0" + valString;
// }
// else
// {
//     return valString;
//   }
// };


var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    $("#seconds").html(pad(++sec%60));
    $("#minute").html(pad(parseInt(sec/60,10)));
}, 1000);




//
// var timer = setInterval(count, 1000);
// var totalSeconds = 00;
// function count() {
// ++totalSeconds;
// var hour = Math.floor(totalSeconds /3600);
// var minute = Math.floor((totalSeconds - hour*3600)/60);
// var seconds = totalSeconds - (hour*3600 + minute*60);
//
// document.getElementById("time").innerHTML = minute + ":" + seconds;
// }












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
