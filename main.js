let btn = document.getElementById('menu-btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = () => {
    sidebar.classList.toggle('sidebar-active')
}