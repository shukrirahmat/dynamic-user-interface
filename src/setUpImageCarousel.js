const setUpImageCarousel = function(imagelist, nextbtn, previousbtn, selector) {

    imagelist[0].classList.add(selector);

    const getCurrentImageIndex = () => {
        let current;
        imagelist.forEach((image, index) => {
            if (image.classList.contains(selector)) {
                current = index;
            }
        })
        return current;
    }

    nextbtn.addEventListener("click", () => {
        const current = getCurrentImageIndex();
        if (current < (imagelist.length - 1)) {
            imagelist[current].classList.remove(selector);
            imagelist[current + 1].classList.add(selector);
        } 
    })

    previousbtn.addEventListener("click", () => {
        const current = getCurrentImageIndex();
        if (current > 0) {
            imagelist[current].classList.remove(selector);
            imagelist[current - 1].classList.add(selector);
        } 
    })
}

export default setUpImageCarousel;