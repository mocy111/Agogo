let countdown;
const timerDisplay= document.querySelector('.display__time-left');   
const beBack= document.querySelector('.displayEndTime');
const buttons= document.querySelectorAll('[data-time] ')
function timer(seconde)
{

    clearInterval(countdown);

    const now =Date.now();
    const then = now + seconde *1000;
    displayTimeLeft(seconde);
    displayEndTime(then);
   countdown= setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) /1000);

    if(secondLeft<0){
        clearInterval(countdown);
        return;
    }

    displayTimeLeft(secondLeft)
    },1000);
    
}
function displayTimeLeft(seconde){
    const minute = Math.floor(seconde/60);
    const remainderSecond = seconde % 60;
    const display =  `${minute}:${remainderSecond<10?'0':''}${remainderSecond}`;
    document.title=display;
    timerDisplay.textContent = display;
}
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const heure = end.getHours();
    const minute = end.getMinutes();
    beBack.textContent= `Vous devez revenir à ${heure}h:${minute<10?'0':''}${minute}mn`;

}
function startTimer() {
    const seconde = parseInt(this.dataset.time);
    timer(seconde); 
}


buttons.forEach(buttons=>buttons.addEventListener('click',startTimer))

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const min = this.minute.value;
    console.log(min);
    timer(min*60);
    this.reset();
});
