// دا علشان المنيو تظهر و تختفي لما تضغط علي زر المنيو
const menu= document.querySelector('.menu-btn');
const links= document.querySelector('.links');
menu.addEventListener('click',()=>{ 
    links.classList.toggle('hide');
})