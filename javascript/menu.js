const btnMobile = document.getElementById('menu-btn');
function toggleMenu(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menu = document.getElementById('menu');
function toggleLink(event){
    if(event.type === 'touchstart'){event.Default()};
    const link = document.getElementById('link');
    link.classList.toggle('close');
    if(link.classList.contains('close')){nav.classList.remove('active')};
}
menu.addEventListener('click', toggleMenu);
menu.addEventListener('touchstart', toggleMenu);