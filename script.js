const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const toggle = document.querySelector('.toggle')
const html = document.querySelector("html")

toggle.addEventListener("click", (e)=> {
    html.classList.toggle('dark')

    if(html.classList.contains("dark")) {
        e.target.innerHTML = "Light mode"
    }else {
        e.target.innerHTML = "Dark mode"
    }
})

