//Variables
var menu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector("#mySidenav"); 
var closeBtn = document.querySelector(".closebtn"); 

//group chat
var dots = document.querySelector("#dots"); 
var more = document.querySelector("#more"); 
var moreBtn = document.querySelector("#moreImg"); 
var add= document.querySelector("#add");

//students chat

var dots2 = document.querySelector("#dots2"); 
var more2 = document.querySelector("#more2"); 
var moreBtn2 = document.querySelector("#moreImg2"); 
var add2= document.querySelector("#add2");

var reminder = document.querySelector("#reminder"); 
 

//Methods

reminder.classList.add("popUp"); 

    //Menu
menu.addEventListener("click", openNav); 
function openNav() {
    sidenav.style.width = "100%";
}

closeBtn.addEventListener("click", closeNav);
function closeNav(){
  sidenav.style.width = "0%";
}
    //Read more button - Group chat
moreBtn.addEventListener("click", readMore); 
function readMore(){
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreBtn.innerHTML = "..."; 
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        moreBtn.innerHTML = "..."; 
        more.style.display = "inline";
      }
}

    //Read more button - Students chat
    moreBtn2.addEventListener("click", readMore2); 
    function readMore2(){
        if (dots2.style.display === "none") {
            dots2.style.display = "inline";
            moreBtn2.innerHTML = "..."; 
            more2.style.display = "none";
          } else {
            dots2.style.display = "none";
            moreBtn2.innerHTML = "..."; 
            more2.style.display = "inline";
          }
    }

reminder.addEventListener("click", messageOthers);
function messageOthers(){
    window.open("member.html", "_self");
}
