var menu = document.querySelector('.menu');

var navbar = document.querySelector('.Navbar');

function open(){
    if( navbar.style.width === '300px' ){
        navbar.style.width='0%';
    } else{
        navbar.style.width= "300px" ;
        
    }
}

menu.addEventListener('click', open)