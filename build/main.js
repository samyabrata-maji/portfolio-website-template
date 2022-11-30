let btn = document.getElementById('menu-btn')
let sidebar = document.querySelector('.sb')

alert("hello")

btn.onclick = () => {
    sidebar.classList.toggle('sb-active')
}