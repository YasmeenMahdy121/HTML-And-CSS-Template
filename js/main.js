// increase progress onscroll to our skills section
let ourSkillsSection=document.querySelector('#our-skills');
let progressBar=document.querySelectorAll('.progress-bar');

// increase number in stats section
let statsSection=document.querySelector('#statistics');
let statsNum=document.querySelectorAll('#statistics strong');
let startCount=false; // true means started, false means not started

window.onscroll = function(){
    // increase our skills progress width
    if(window.scrollY >= ourSkillsSection.offsetTop - 200){
        progressBar.forEach((progress)=>{
            progress.style.width = progress.getAttribute('aria-valuenow');
        });
    }

    // increase stats numbers
    if(window.scrollY >= statsSection.offsetTop - 100){
        if(!startCount){
            statsNum.forEach((num)=>{
                let statsGoal = num.dataset.goal;
                let count = setInterval(()=>{
                    num.textContent++;
                    if(num.textContent==statsGoal){
                        clearInterval(count);
                    }
                },2000/statsGoal);
            });
        }
        startCount=true;
    }
};


// countdown to event date
let eventSection=document.querySelector('#events');
let time=document.querySelectorAll('#events .unit .time');
let eventDate = new Date("Dec 31, 2022 23:59:59").getTime();

let countDown = setInterval(()=>{
    let dateNow = new Date().getTime();
    let difDate = eventDate - dateNow;
    let days= Math.floor(difDate/(1000*60*60*24));
    let hours= Math.floor((difDate%(1000*60*60*24))/(1000*60*60));
    let minutes= Math.floor((difDate%(1000*60*60))/(1000*60));
    let seconds= Math.floor((difDate%(1000*60))/1000);
    time[0].textContent=days<10? `0${days}` : days;
    time[1].textContent=hours<10? `0${hours}` : hours;
    time[2].textContent=minutes<10? `0${minutes}` : minutes;
    time[3].textContent=seconds<10? `0${seconds}` : seconds;

    if(difDate<0){
        clearInterval(countDown);
    }
},1000);
