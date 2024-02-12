const toggleBtn=document.querySelector(".menu-icon");
const menulist=document.querySelector(".menu-items");


toggleBtn.addEventListener("click",()=>{
    menulist.classList.toggle("active");
})


const header=document.querySelector("header");
const loginForm=document.querySelector(".login-form");
const sections=document.querySelector(".explore-destinations");
const resisterForm=document.querySelector(".resister-form");
const nav=document.querySelector(".nav");

function showLoginPage(){
    document.body.classList.toggle("stopscroll");
    nav.classList.toggle("blurSections");
    sections.classList.toggle("blurSections");
    header.classList.toggle("blurSections");
    loginForm.classList.toggle("showlogin");
    
}

function showResisterPage(){
    document.body.classList.toggle("stopscroll");
    nav.classList.toggle("blurSections");
    sections.classList.toggle("blurSections");
    header.classList.toggle("blurSections");
    resisterForm.classList.toggle("showresister");
    
}

function openResisterFromLogin(){
    showLoginPage();
    showResisterPage();
}

function openloginFromResister(){
    showResisterPage();
    showLoginPage();
}