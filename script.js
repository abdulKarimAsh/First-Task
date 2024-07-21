let dropdown = document.querySelector(".Dropdown");
let img = document.querySelector(".Dropdown img");
let allNav=document.querySelectorAll(".nav a");

var click = true;
dropdown.addEventListener("click",()=>{
    for (let i = 0; i < allNav.length; i++) {
    if (click) {
        allNav[i].classList.add("show");   
        img.setAttribute("src","assets/Add Project/Close.svg")
    }
    else{
        allNav[i].classList.remove("show");   
        img.setAttribute("src","assets/Add Project/Dropdown.svg")
    }
}
click=!click;
})