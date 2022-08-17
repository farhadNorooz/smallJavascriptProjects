const showDay = document.querySelector('.day-num');
const showHour = document.querySelector('.hour-num');
const showMinute = document.querySelector('.minute-num');
const showSecond = document.querySelector('.seconds-num');


const chrismas = '1 jan 2023';
const chrismasDate = new Date(chrismas);


const giveTime = () => {
    const date = new Date();
    const diff =Math.floor((chrismasDate - date) / 1000);
    const days = Math.floor(diff/(3600*24));
    const hours = Math.floor(diff/3600) % 24;
    const minutes = Math.floor(diff/60) % 60; 
    const seconds = Math.floor(diff) % 60;
    console.log(days,hours,minutes,seconds);

    showDay.textContent=days;
    showHour.textContent=hours;
    showMinute.textContent=minutes;
    showSecond.textContent=seconds;
    
    // if(seconds === 0){
    //     hours --;
    // }
    // if(hours === 0){
    //     days --;
    // }
}

setInterval(giveTime , 1000)
