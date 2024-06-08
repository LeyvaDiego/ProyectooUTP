const barra = document.getElementById("barra");
const sidebar = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const palanca= document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main =document.querySelector("main");


palanca.addEventListener("click",()=>{
    let body =document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});
menu.addEventListener("click",()=>{
    sidebar.classList.toggle("max-sidebar");
    if(sidebar.classList.contains("max-sidebar")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        sidebar.classList.add("minisidebar");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

barra.addEventListener("click",()=>{
    sidebar.classList.toggle("minisidebar");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});