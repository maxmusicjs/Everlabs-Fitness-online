//бургер меню function
const btnHamburger = document.querySelector('.hamburger');
let navHambergerBlock = document.querySelector('.nav-hamberger-block');
const btnSolid = document.querySelector('.fa-solid');

btnHamburger.addEventListener('click',() =>{
    navHambergerBlock.classList.add("active");
});
btnSolid.addEventListener('click',(e) =>{
    e.preventDefault();
    navHambergerBlock.classList.remove("active");
});
//розділ навігації
const menuLink = document.querySelectorAll('.nav-item[data-goto]');
if(menuLink.length > 0){

    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click',onMenuLinkClick)
        
    });
    function onMenuLinkClick(e) {
        const navLink = e.target;
        if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientReact().top + pageYOffset + document.querySelector('header').offsetHeight;

            window.scrollTo({
                top:gotoBlockValue,
                bahavior:'smooth'
        });
        e.preventDefault();
        }
    }

}