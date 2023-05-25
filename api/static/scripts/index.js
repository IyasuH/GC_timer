const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Jul 8, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);

var navbar = document.getElementById("cotmTopnav")

window.onscroll = function(){scrollFunction()};

var sticky = navbar.offsetTop;
let mybutton = document.getElementById("toTopBtn");

function scrollFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    if (document.body.scrollTop >20 || document.documentElement.scrollTop >20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display="none";
    }
}

function toTopBtn(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    if (document.body.scrollTop >20 || document.documentElement.scrollTop >20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display="none";
    }

}