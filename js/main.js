const btn = document.querySelector('.menu');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav__list');
const basket = document.querySelector('.basket');
const baskenavLanguageChooset = document.querySelector('.nav__language-choose');
const navLanguage = document.querySelectorAll('.nav__language');
const login = document.querySelector('.login');
const loginacc = document.querySelector('.loginacc');

btn.addEventListener('click', () => {
    navList.style.transform = "translateX(0)"
    // navList.style.z-index = "999"
})
close.addEventListener('click', () => {
    navList.style.transform = "translateX(-110%)"
})
basket.addEventListener('click', () => {
    baskenavLanguageChooset.classList.toggle('active')
})
navLanguage.forEach(el => {
    el.addEventListener('click', () => {
        baskenavLanguageChooset.classList.add('active')
    })
});
login.addEventListener('click', () => {
    console.log('sla');
})





