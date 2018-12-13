var menu = document.querySelector("#burgermenu"); 
var sidenav = document.querySelector("#mySidenav"); 
var closeBtn = document.querySelector(".closebtn"); 

var semester1 = document.querySelector("#semester1");
var studentslist1 = document.querySelector("#studentslist1"); 
var semester2 = document.querySelector("#semester2");
var studentslist2 = document.querySelector("#studentslist2"); 


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
    

semester1.addEventListener("click",dropdown);
function dropdown(){
    if (studentslist1.style.display === "none"){
        studentslist1.style.display = "block"; 
    } else{
        studentslist1.style.display = "none"; 
    }
}

semester2.addEventListener("click",dropdown2);
function dropdown2(){
    if (studentslist2.style.display === "none"){
        studentslist2.style.display = "block"; 
    } else{
        studentslist2.style.display = "none"; 
    }
}