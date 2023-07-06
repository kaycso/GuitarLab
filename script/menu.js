let buttonOpenMenu = document.getElementById("open-menu")
let menuExpanded = document.getElementById("menu")

function openMenu() {
    document.body.classList.add('expanded')
    buttonOpenMenu.classList.add('expanded')
    menuExpanded.classList.add('expanded')
}

function closeMenu() {
    document.body.classList.remove('expanded')
    buttonOpenMenu.classList.remove('expanded')
    menuExpanded.classList.remove('expanded')
}