//---------------- Hema Edit ------------------
const menu= document.querySelector('.menu-btn');
const links= document.querySelector('.links');
menu.addEventListener('click',()=>{ 
    links.classList.toggle('hide');
})
function ChangeTheme() {
    const themeLink = document.getElementById('theme-link');
    const currentTheme = themeLink.getAttribute('href');

    if (currentTheme.includes('themegirls.css')) {
        themeLink.setAttribute('href', 'themeboys.css');
        localStorage.setItem('selectedTheme', 'boys'); 
    } else {
        themeLink.setAttribute('href', 'themegirls.css');
        localStorage.setItem('selectedTheme', 'girls');
    }
}
window.onload = function() {
    const savedTheme = localStorage.getItem('selectedTheme');
    const themeLink = document.getElementById('theme-link');

    if (savedTheme === 'boys') {
        themeLink.setAttribute('href', 'themeboys.css');
    } else if (savedTheme === 'girls') {
        themeLink.setAttribute('href', 'themegirls.css');
    }
};