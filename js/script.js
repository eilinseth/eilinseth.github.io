const navbar = document.querySelector('.navbar-nav');
const hamburger = document.getElementById('hamburger-menu');
hamburger.addEventListener('click',function(){
    navbar.classList.toggle('active');
    e.preventDefault();
})

document.addEventListener('click',function(e){
    
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active');
    }
    // e.preventDefault();
})