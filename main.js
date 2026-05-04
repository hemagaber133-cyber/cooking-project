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
    window.location.href="https://hemagaber133-cyber.github.io/cooking-project/index.html";
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

//جافا بتاعت صفحة المقارنة
const foodData = {
    "pizza": { name: "Pizza", cal: "266 kcal", protein: "11g", fat: "10g", carbs: "33g", chol: "17mg", img: "pizzacompare.jpg" },
    "burger": { name: "Burger", cal: "295 kcal", protein: "17g", fat: "14g", carbs: "24g", chol: "47mg", img: "burgercompare.jpg" },
    "pasta": { name: "Pasta", cal: "131 kcal", protein: "5g", fat: "1.1g", carbs: "25g", chol: "70mg", img: "pastacompare.jpg" },
    "sushi": { name: "Sushi", cal: "143 kcal", protein: "4g", fat: "0.5g", carbs: "30g", chol: "4mg", img: "sushicompare.jpg" },
    "spaghetti": { name: "Spaghetti", cal: "158 kcal", protein: "6g", fat: "0.9g", carbs: "31g", chol: "80mg", img: "spagcompare.jpg" },
    "steak": { name: "Steak", cal: "271 kcal", protein: "25g", fat: "19g", carbs: "0g", chol: "78mg", img: "steakcompare.jpg" },
    "salad": { name: "Salad", cal: "15 kcal", protein: "8g", fat: "0.2g", carbs: "10g", chol: "50mg", img: "saladcompare.jpg" },
    "fries": { name: "fries", cal: "200 kcal", protein: "1g", fat: "7g", carbs: "3g", chol: "30mg", img: "friescompare.jpg" },
    "friedchicken": { name: "friedchicken", cal: "257 kcal", protein: "3g", fat: "13g", carbs: "34g", chol: "58mg", img: "friedcompare.jpg" },
    "cake": { name: "Cake", cal: "215kcal", protein: "9g", fat: "20g", carbs: "54g", chol: "56mg", img: "cakecompare.jpg" },
    "chocolatecake": { name: "ChocolateCake", cal: "371 kcal", protein: "2g", fat: "16g", carbs: "53g", chol: "50mg", img: "choccompare.jpg" },
    "cookies": { name: "cookies", cal: "100 kcal", protein: "9g", fat: "15g", carbs: "70g", chol: "67mg", img: "cookiescompare.jpg" },
     "donut": { name: "donut", cal: "150 kcal", protein: "4g", fat: "10g", carbs: "53g", chol: "48mg", img: "donutcompare.jpg" }
    
    
    
};


const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const food1Key = document.getElementById('food1').value;
    const food2Key = document.getElementById('food2').value;

    const food1 = foodData[food1Key];
    const food2 = foodData[food2Key];

    if (food1 && food2) {
       
        document.getElementById('foodcomparisonimages').style.display = 'flex';
        document.getElementById('table-result').style.display = 'block';

      
        document.getElementById('food1Img').src = food1.img;
        document.getElementById('food1Name').innerText = food1.name;
        document.getElementById('food2Img').src = food2.img;
        document.getElementById('food2Name').innerText = food2.name;

        document.getElementById('foodName1').innerText = food1.name;
        document.getElementById('foodName2').innerText = food2.name;

      
        document.getElementById('cal1').innerText = food1.cal;
        document.getElementById('cal2').innerText = food2.cal;
        document.getElementById('protein1').innerText = food1.protein;
        document.getElementById('protein2').innerText = food2.protein;
        document.getElementById('fat1').innerText = food1.fat;
        document.getElementById('fat2').innerText = food2.fat;
        document.getElementById('carbs1').innerText = food1.carbs;
        document.getElementById('carbs2').innerText = food2.carbs;
        document.getElementById('chol1').innerText = food1.chol;
        document.getElementById('chol2').innerText = food2.chol;

        
        window.scrollTo({ top: document.getElementById('table-result').offsetTop - 50, behavior: 'smooth' });
    }
});


