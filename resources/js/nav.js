const mobileNav = document.querySelector(".mobileNav");
const mobileNavToggle = document.querySelector(".mobileNavToggle");

mobileNavToggle.addEventListener('click', () => {
    const visibility = mobileNav.getAttribute('data-visible');
    
    if (visibility === "false") {
        mobileNav.setAttribute('data-visible', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
    } else {
        mobileNav.setAttribute('data-visible', false);
        mobileNavToggle.setAttribute('aria-expanded', false);
    };
});

