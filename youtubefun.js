let login_button = document.querySelector(".login-button");
let login_box = document.querySelector(".user-login");
let isClick = true;

// for login button click
login_button.addEventListener("click", function(){
    if(isClick){
        login_box.classList.remove("outof_screen")
        isClick = false;
    }else{
        login_box.classList.add("outof_screen");
        isClick = true;
    }
});

let video_btn = document.querySelector(".video-box");
let video_box = document.querySelector(".user-video");
let isClick2 = true;
video_btn.addEventListener("click", function(){
    if(isClick2){
        video_box.classList.remove("outof_screen")
        isClick2 = false;
    }else{
        video_box.classList.add("outof_screen");
        isClick2 = true;
    }
});

let bell_icon = document.querySelector(".bell-icon");
let bell_box = document.querySelector(".bellicon-box");
let bell = document.querySelector(".fa-bell");
let isClick3 = true;
bell_icon.addEventListener("click", function(){
    if(isClick3){
        bell_box.classList.remove("outof_screen")
        bell.classList.remove("fa-regular");
        bell.classList.add("fa-solid");
        isClick3 = false;
    }else{
        bell_box.classList.add("outof_screen");
        bell.classList.add("fa-regular");
        bell.classList.remove("fa-solid");
        isClick3 = true;
    }
});

let sidebar_btn = document.querySelectorAll(".sidebar-menu");
let sidebar1 = document.querySelector(".side-bar1");
let videos = document.querySelector(".youtube-videos");
let isClick4 = false;

function sidebar_bound(){
    if(isClick4){
        sidebar1.classList.add("left-screen");
        videos.classList.remove("sidebar-effect");
        isClick4 = false;
    }else{
        sidebar1.classList.remove("left-screen");
        videos.classList.add("sidebar-effect");
        isClick4 = true;
    }
}
for(let btn1 of sidebar_btn){
    btn1.addEventListener("click", sidebar_bound);
}
