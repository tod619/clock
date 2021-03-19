const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const time = document.querySelector('.time')
const date = document.querySelector('.date')

const toggle = document.querySelector('.toggle')
const html = document.querySelector("html")

toggle.addEventListener("click", ()=> {
    html.classList.toggle('dark')
})

