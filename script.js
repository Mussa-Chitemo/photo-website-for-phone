// variable 
const navLink = document.querySelector('.nav-link');
const hambugerMenu = document.querySelector('.hambuger');


// adding event listerner 
hambugerMenu.addEventListener("click", ()=>{
     navLink.classList.toggle("active");
     hambugerMenu.classList.toggle("active");
});