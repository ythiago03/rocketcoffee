const hamburger = document.querySelector('.h-menu')


const expandedNav = () => {
    const nav = document.querySelector('.h-navbar__mobile')
    nav.classList.toggle('active')

    const open  = document.querySelector('.open')
    const close = document.querySelector('.close')
    const active = nav.classList.contains('active')
    if(active){
        open.style.display = 'none'
        close.style.display = 'block'
    }else{
        open.style.display = 'block'
        close.style.display = 'none'
    }
}


hamburger.addEventListener('click', expandedNav)