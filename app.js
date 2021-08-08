const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.nav')
const headline = document.querySelector('h1')

open.addEventListener('click', () => {
    console.log('clicked')
    open.style.visibility = "hidden"
    close.style.visibility = "visible"
    close.style.transform = "rotate(90deg)"
    menu.style.transform = "translateX(0%)"
    headline.style.color = "#2a3638"
    headline.style.transform = "translateX(50%)";

})

close.addEventListener('click', () => {
    console.log('clicked close')
    open.style.visibility = "visible"
    close.style.visibility = "hidden"
    menu.style.transform = "translateX(100%)"
    headline.style.color = "#ff847c"
    headline.style.transform = "translateX(-50%)";
})