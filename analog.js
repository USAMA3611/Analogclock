function setClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourHand = document.getElementById("hrs");
    let minuteHand = document.getElementById("min");
    let secondHand = document.getElementById("sec");

    let hourRotation = (hours % 12 + minutes / 60) * 360 / 12;
    let minuteRotation = (minutes + seconds / 60) * 360 / 60;
    let secondRotation  =  seconds  * 360 / 60;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

//  Update the clock every second
setInterval(setClock, 1000);

//initial call to set the initial clock state
 
setClock();


