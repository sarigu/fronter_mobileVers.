var menu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector("#mySidenav"); 
var closeBtn = document.querySelector(".closebtn"); 
var popup = document.querySelector(".popup"); 
var popupText = document.querySelector("#myPopup");
var example = document.querySelector("#demo");  
var textContent = document.querySelector("#myText"); 

menu.addEventListener("click", openNav); 
function openNav() {
    sidenav.style.width = "100%";
}

closeBtn.addEventListener("click", closeNav);
function closeNav(){
  sidenav.style.width = "0%";
}

popup.addEventListener("click", up);
function up(){
  popupText.classList.toggle("show");
  example.innerHTML = textContent.value; 
}

