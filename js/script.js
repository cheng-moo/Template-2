// Variables
// Start Header
const navLinks = document.querySelector('nav ul');
const menuBtn = document.querySelector('.toggle-menu');
const navLinksList = document.querySelectorAll('nav ul li');
// End Header
// Functions
// Start Header
function toggleMenu () {
    navLinks.classList.toggle('active');
}
function activeLink (e) {
    for (const li of navLinksList) {
        li.firstElementChild.classList.remove('active');
    }
    console.log(e.target);
    e.target.classList.add('active');
}
// End Header
// Events
// Start Header
menuBtn.addEventListener('click', toggleMenu);
navLinksList.forEach(li => {
    li.addEventListener('click', activeLink);
})
// End Header