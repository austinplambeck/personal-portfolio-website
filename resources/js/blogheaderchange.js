window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        document.getElementById('mobileHeaderTitle').innerHTML = 'plambo.world/BLOG';
    } else {
        document.getElementById('mobileHeaderTitle').innerHTML = 'plambo.world';
    }
});
