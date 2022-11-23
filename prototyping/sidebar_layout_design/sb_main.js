let menu_btn = document.getElementById('menu-btn');
let con_sidebar = document.querySelector('.sidebar');

menu_btn.onclick = () => {
    // window.alert('click');
    // con_sidebar.innerHTML = "hello"
    con_sidebar.classList.toggle('sidebar-active')
}