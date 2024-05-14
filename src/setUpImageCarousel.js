const setUpImageCarousel = function (
  imagelist,
  dots,
  nextbtn,
  previousbtn,
  selector
) {
  const getCurrentImageIndex = () => {
    let current;
    imagelist.forEach((image, index) => {
      if (image.classList.contains(selector)) {
        current = index;
      }
    });
    return current;
  };

  const moveSlides = (moveIndex) => {
    const current = getCurrentImageIndex();
    imagelist[current].classList.remove(selector);
    imagelist[moveIndex].classList.add(selector);
    updateNavigationDots();
  };

  const updateNavigationDots = () => {
    const current = getCurrentImageIndex();
    dots.forEach((dot, index) => {
        if (index === current) {
            dot.classList.add("show");
        } else {
            dot.classList.remove("show");
        }
    })
  }

  nextbtn.addEventListener("click", () => {
    const current = getCurrentImageIndex();
    if (current < imagelist.length - 1) {
      moveSlides(current + 1);
    }
  });

  previousbtn.addEventListener("click", () => {
    const current = getCurrentImageIndex();
    if (current > 0) {
        moveSlides(current - 1);
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveSlides(index);
    })
  })

  imagelist[0].classList.add(selector);
  updateNavigationDots();
};

export default setUpImageCarousel;
