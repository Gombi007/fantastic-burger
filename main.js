let hamburgerMenuDiv = document.querySelector('.hamburger-menu');
let hamburgerMenuItems = document.querySelectorAll('.hamburger-menu-item');
let btnHamburgerMenu = document.getElementById('btn-hamburger-menu');

btnHamburgerMenu.addEventListener("click", addOrRemoveActivClass);

hamburgerMenuItems.forEach(link => {
    link.addEventListener("click", addOrRemoveActivClass)
});

function addOrRemoveActivClass() {
    if (hamburgerMenuDiv.classList.contains('hamburger-menu-active')) {
        hamburgerMenuDiv.classList.remove('hamburger-menu-active')
        hamburgerMenuDiv.classList.add('hamburger-menu-deactive');
        return;
    }
    if (hamburgerMenuDiv.classList.contains('hamburger-menu-deactive')) {
        hamburgerMenuDiv.classList.remove('hamburger-menu-deactive')
        hamburgerMenuDiv.classList.add('hamburger-menu-active');
        return;
    }

}