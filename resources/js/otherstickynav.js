window.addEventListener('scroll', () => {
    const header = document.querySelector('.otherHeaderTitleMobile');
    header.classList.toggle('sticky', window.scrollY > 0);
});




