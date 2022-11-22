let btn = document.getElementById('menu-btn')
let sidebar = document.querySelector('.sb')

btn.onclick = () => {
    sidebar.classList.toggle('sb-active')
}