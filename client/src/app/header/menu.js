const menu = document.getElementById("menu");
const navMenu = document.getElementById('nav-menu')

    menu.addEventListener('click', () => {
        console.log('ok')
        if(navMenu.style.height == '0'){
            navMenu.style.height == '100%'
        } else {
            navMenu.style.height == '0'
        }
    }) 