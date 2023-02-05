let watchnow=document.querySelector(".btn");
let vid=document.getElementById("video");
watchnow.addEventListener("click",()=>{
document.getElementById("trailer").classList.remove("active")
})

let closebtn=document.querySelector(".closebtn");
closebtn.addEventListener("click",()=>{
document.getElementById("trailer").classList.add("active")
vid.pause();
vid.currentTime=0;
})