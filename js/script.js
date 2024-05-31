const navbar = document.querySelector('.navbar-nav');
const hamburger = document.getElementById('hamburger-menu');
hamburger.addEventListener('click',function(e){
    navbar.classList.toggle('active');
    e.preventDefault();
})

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click',function(e){
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
})

document.addEventListener('click',function(event){
    
    if(!hamburger.contains(event.target) && !navbar.contains(event.target)){
        navbar.classList.remove('active');
    };
    if(!searchForm.contains(event.target) && !searchBtn.contains(event.target)){
        searchForm.classList.remove('active');
    };
    
    
})
