/*Logic for Timer*/
var min=0;
var sec=0;
let fulltime=0;

const timer= document.querySelector("#timer");
const startbtn1 = document.querySelector("#start1");
const stopbtn1 = document.querySelector("#stop1");
const resetbtn1 = document.querySelector("#reset1");


startbtn1.addEventListener('click',() =>{
  const startmins=document.getElementById('text').value;
  fulltime=startmins*60;
  updateTimer();
});

stopbtn1.addEventListener('click',() => {
  clearTimeout(time)
});

resetbtn1.addEventListener('click', () => {   
  min= 0;      
  sec= 0;
  timer.innerHTML ="00: 00";
  startmins=0;
  fulltime=0;
});

function updateTimer(){
  time = setTimeout(function(){
  min=Math.floor(fulltime/60);
  sec=fulltime%60;
  timer.innerHTML =`${min}: ${sec}`;
  fulltime--;
  updateTimer();
},1000);
}

/*Logic for stopwatch*/
var hours =0;
var mins =0;
var seconds =0;

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");
let mindis = document.querySelector("#mins");
let secdis = document.querySelector("#seconds");
let hrdis = document.querySelector("#hours");

startbtn.addEventListener('click',() =>{
    startTimer()
});

stopbtn.addEventListener('click',() => {
    clearTimeout(timex)
});

resetbtn.addEventListener('click', () => {
    hours = 0;      
    mins = 0;      
    seconds = 0;
    mindis.textContent="00:";
    hrdis.textContent="00:";
    secdis.textContent="00";
  });

function startTimer(){
    timex = setTimeout(function(){
       seconds++;
    if(seconds >59){
        seconds=0;
        mins++;
       if(mins>59) {
        mins=0;
        hours++;
        if(hours <10) {
            hrdis.textContent='0'+hours+':';
        } 
        else 
            hrdis.textContent=hours+':';
    }              
    if(mins<10){                     
      mindis.textContent='0'+mins+':';
    }       
    else 
       mindis.textContent=mins+':';
    }    
    if(seconds <10) {
      secdis.textContent='0'+seconds;
    } 
    else {
      secdis.textContent=seconds;
    }
    startTimer();

  },1000);
}
    
  