
function  getRemainingTime(endtime){
     var rem = Date.parse(endtime)- Date.parse(new Date());
     var seconds = Math.floor((rem / 1000) % 60);
     var minutes = Math.floor((rem / 1000 / 60) % 60);
     var hours  = Math.floor((rem / (1000 *60 * 60)) % 24);
     var days = Math.floor(rem / (1000 * 60 * 60  * 24));
     debugger ;
      return {
         'total' : rem,
         'days' : days ,
         'hours' : hours ,
         'minutes' : minutes ,
         'seconds' : seconds ,
         
      };
}

function initial(id, endtime){
    var  clock  = document.getElementById(id);
    var dayspan = clock.querySelector('.days');
    var hourspan = clock.querySelector('.hours');
    var minutespan = clock.querySelector('.minutes');
    var secondspan = clock.querySelector('.seconds');

   function updateClock(){
    var t = getRemainingTime(endtime);
    dayspan.innerHTML = t.days;
    hourspan.innerHTML = ('0'+ t.hours).slice(-2);
    minutespan.innerHTML = ('0'+ t.minutes).slice(-2);
    secondspan.innerHTML = ('0' + t.seconds).slice(-2);
   if(t.total <= 0){
    clearInterval(timeinterval);
   }

   }
   updateClock();
   var timeinterval = setInterval(updateClock , 1000);

}
var deadline = new Date(Date.parse(new Date()) + 10 * 24 * 60 * 60 *1000);
initial('clockdiv',deadline);