// Change the header font size on smaller screens
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.querySelector('header').style.fontSize = '1.5em';
    } else {
        document.querySelector('header').style.fontSize = '2em';
    }
});

window.addEventListener('load', function() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item) {
        const content = item.querySelector('article');
        const img = item.querySelector('img');

        if (content && img) {
            const contentHeight = content.offsetHeight;
            const imgHeight = img.offsetHeight;

            const maxHeight = Math.max(contentHeight, imgHeight);

            item.style.height = maxHeight + 'px';
        }
    });
});