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
function search() {
    let input = document.getElementById('myInput').value.toLowerCase();
    let cards = document.querySelectorAll('.recipe-card');

    cards.forEach(card => {
        let titleElement = card.querySelector('.recipe-titel');
        if (titleElement) {
            let title = titleElement.textContent.toLowerCase();

            if (title.includes(input)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}
/*-----Ziad mahmoud Edit-----*/
document.addEventListener("DOMContentLouded",function()
{
    const loginForm=
document.getElementByld("login-form");
    loginForm.addEventListener("submit",function(event)
{
    event.preventDefault();
    const emailinput=
document.getElementByld("email").value;
    const passwordinput=
document.getElementByld("password").value;
if(emailinput=== "" || password === ""){
    alert("Please fill out this field.");
    return;
}
    alert("Welcome to our resturant!");
    });
});
/*-----Sign up page js-----*/
const registerForm = document.getElementById('registerForm');
const regMessage = document.getElementById('reg-message');

// Handle form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simple validation
    if (name.length < 3) {
        showMessage('Name must be more than 2 characters.', 'red');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long.', 'red');
        return;
    }

    // Success action (you can connect this to your API/Backend later)
    showMessage('Account created successfully! Redirecting...', 'green');
    
    // Reset form
    registerForm.reset();
});

// Helper function to display messages
function showMessage(text, color) {
    regMessage.textContent = text;
    regMessage.style.color = color;
}

