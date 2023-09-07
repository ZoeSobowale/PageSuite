// Change the header font size on smaller screens
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.querySelector('header').style.fontSize = '1.5em';
    } else {
        document.querySelector('header').style.fontSize = '2em';
    }
});
