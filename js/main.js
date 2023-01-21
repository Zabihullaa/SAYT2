const btn = document.querySelector('.menu');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav__list');
const basket = document.querySelector('.basket');
const basketLanguage = document.querySelector('.basket__language');
const baskenavLanguageChooset = document.querySelector('.nav__language-choose');
const navchange = document.querySelector('.nav__language');
const h1 = document.querySelector('.header-title');


btn.addEventListener('click', () => {
    navList.style.transform = "translateX(0)"
    // navList.style.z-index = "999"
})
close.addEventListener('click', () => {
    navList.style.transform = "translateX(-110%)"
})
// basket.addEventListener('click', () => {
//     baskenavLanguageChooset.classList.add('active')
//     h1.classList.add('active')

// })
window.addEventListener('click', () => {
    
})






// baskenavLanguageChooset.addEventListener('click', () => {
//     console.log('salom');
//     baskenavLanguageChooset.classList.add('isactive')

// })







