const otherMobileNav = document.querySelector(".otherMobileNav");
const otherMobileNavToggle = document.querySelector(".otherMobileNavToggle");

otherMobileNavToggle.addEventListener('click', () => {
    const visibility = otherMobileNav.getAttribute('data-visible');
    
    if (visibility === "false") {
        otherMobileNav.setAttribute('data-visible', true);
        otherMobileNavToggle.setAttribute('aria-expanded', true);
    } else {
        otherMobileNav.setAttribute('data-visible', false);
        otherMobileNavToggle.setAttribute('aria-expanded', false);
    };
});