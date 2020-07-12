var min=0;
var sec=0;
var hour=0
var sta=document.getElementById('btnStart');
var sto=document.getElementById('btnStop');
var res=document.getElementById('btnReset');
var hourHeading=document.getElementById("Hour");
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var interval;
 function timer(){
     sec++
     secHeading.innerHTML=sec;
     
 
 if(sec>=60){
     min++
     minHeading.innerHTML=min;
     sec=0;
 }
 else if(min>=60){
    hour++
    minHeading.innerHTML=hour;
    min=0;
}
 }
 function start(){
     if(sta.checked===true){
 interval=setInterval(timer,1000)
 sto.checked=false;
 res.checked=false;
}
 }
 function stop(){
    if(sto.checked===true){
        clearInterval(interval);
        sta.checked=false;
        res.checked=false;
}
}
function reset(){
    if(res.checked===true){
        sec=0;
        min=0;
        hour=0;
        hourHeading.innerHTML=hour;
        minHeading.innerHTML=min;
        secHeading.innerHTML=sec;
        clearInterval(interval);
        sta.checked=false;
        sto.checked=false;
        
}
}
 // var count=0;
// var interval;
// function timer(){
// count++
// }
// setInterval(timer,1000)
// function timeOut()
// {
//     clearInterval(interval);

// }
// interval= setTimeout(timeOut,1000)
