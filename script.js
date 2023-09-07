// Change the header font size on smaller screens
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.querySelector('header').style.fontSize = '1.5em';
    } else {
        document.querySelector('header').style.fontSize = '2em';
    }
});

// Show header when scrolling down, and remove it when scrolling up
let isScrolling = false;

window.addEventListener('scroll', function() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            if (window.scrollY > 50) {
                document.querySelector('.sticky-header').classList.add('scrolled');
            } else {
                document.querySelector('.sticky-header').classList.remove('scrolled');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});