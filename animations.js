
const observer = new IntersectionObserver(animations => {
    animations.forEach(animation => {
        const svg = animation.target.firstElementChild;
        const path = svg.firstElementChild;
        if (animation.isIntersecting) {

            path.classList.add('drawingLineAnimation');
            return;
        } else {

            path.classList.remove("drawingLineAnimation");
        }

    })
}, {
    threshold: [0.5]
}

)

const animations = document.querySelectorAll(".drawingLineSeparator")
animations.forEach((animation) => {
    observer.observe(animation);
})




// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const animation = entry.target.querySelector('.pathDrawingLine');

//         if (entry.isIntersecting) {
//             animation.classList.add('drawingLineAnimation');
//             return;
//         }

//         animation.classList.remove('drawingLineAnimation');
//     });
// });


// observer.observe(document.querySelector('.drawingLineSeparator'));