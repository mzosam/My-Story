const menuButton = document.querySelector('.fa-bars');
const menu = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('open');
})

function scrollL(){
    let left = document.getElementById('card-slider');
    left.scrollBy(350,0);
}

function scrollR(){
    let right = document.getElementById('card-slider');
    right.scrollBy(-350,0);
}

const toggleIcon = document.querySelector('.fa-bars');
toggleIcon.addEventListener('click', ()=>{
    if(toggleIcon.classList.contains('fa-bars')){
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
    }

    else{
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    }
})

window.addEventListener("load", ()=>{
const loader = document.querySelector(".Loading");

            loader.classList.add("loader--hidden");
            loader.addEventListener("transitionend", ()=>{
                document.body.removeChild(loader);
            })
        })            
