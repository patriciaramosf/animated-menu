'use strict';
let toggleButton = document.querySelector('.toggle');
let navigation = document.querySelector('navigation');
let icon = document.querySelector('.fas');


const showMenu = (e) =>{
    navigation.classList.toggle('menu_closed');
    e.target.classList.toggle('fa-bars');
    e.target.classList.toggle('fa-times');
    changeElements()
}
    const changeElements = () =>{
        if(navigation.classList.contains('menu_closed')){
            toggleButton.classList.remove('black');
            icon.classList.remove('iconWhite');
            toggleButton.classList.add('white');
            icon.classList.add('iconBlack');
        }else{
            toggleButton.classList.add('black');
            icon.classList.add('iconWhite');
        }
    }

toggleButton.addEventListener('click', showMenu);