//Variables
var menu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector("#mySidenav"); 
var closeBtn = document.querySelector(".closebtn"); 
var popup = document.querySelector(".popup"); 
var popupText = document.querySelector("#myPopup");
var example = document.querySelector("#demo");  
var textContent = document.querySelector("#myText"); 
var chat1 = document.querySelector("#chatText1"); 
var chat2 = document.querySelector("#chatText2"); 


//Methods

    //Menu
    menu.addEventListener("click", openNav); 
    function openNav() {
        sidenav.style.width = "100%";
        popup.style.display = "none"; 
        chat1.style.display="none";
        chat2.style.display="none";  
    }
    
    closeBtn.addEventListener("click", closeNav);
    function closeNav(){
      sidenav.style.width = "0%";
      popup.style.display = "block"; 
      chat1.style.display="block";
      chat2.style.display="block";
    }

    popup.addEventListener("click", up);
    function up(){
      popupText.classList.add("show");
      example.innerHTML = textContent.value; 
    }