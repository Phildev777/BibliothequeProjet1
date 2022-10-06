
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const animation = entry.target.querySelector('.pathDrawingLine');

        if (entry.isIntersecting) {
            animation.classList.add('drawingLineAnimation');
            return;
        }

        animation.classList.remove('drawingLineAnimation');
    });
});


observer.observe(document.querySelector('.drawingLineSeparator'));

