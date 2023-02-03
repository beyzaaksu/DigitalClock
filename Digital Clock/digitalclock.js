//to find elements to manipulate them
const hourDOM= document.getElementById("hour");
const minutesDOM= document.getElementById("minutes");
const secondsDOM= document.getElementById("seconds");
const ampmDOM=document.getElementById("ampm");

//function to get data from our computer

function updateClock(){
    let hour = new Date().getHours();
    let minutes= new Date().getMinutes();
    let seconds= new Date().getSeconds();
    let ampm= "AM"

    if(hour>12){
        hour=hour-12;
        ampm="PM"
    }
  
    //to make hour double digit
    if(hour<10){
        hour= "0" + hour
    }
    if(minutes<10){
        minutes= "0" + minutes
    }
    if(seconds<10){
        seconds= "0" + seconds
    }
    hourDOM.innerText=hour;
    minutesDOM.innerText=minutes;
    secondsDOM.innerText=seconds;
    ampmDOM.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000) //to call function again in 1 second , this makes seconds visible
}

updateClock();