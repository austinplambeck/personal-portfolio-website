window.addEventListener('scroll', () => {
    const header = document.querySelector('.headerTitleMobile');
    header.classList.toggle('sticky', window.scrollY > 150);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.headerDesktop');
    header.classList.toggle('sticky', window.scrollY > 300);
});