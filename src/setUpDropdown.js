const setUpClickDropdown = function (button, content, selector) {
  const toggleDropdown = () => {
    content.classList.toggle(selector);
  };

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", () => {
    if (content.classList.contains(selector)) {
      toggleDropdown();
    }
  });
};

const setUpHoverDropdown = function (button, content, selector) {
  button.addEventListener("mouseenter", () => {
    content.classList.add(selector);
  });

  content.addEventListener("mouseenter", () => {
    content.classList.add(selector);
  });

  button.addEventListener("mouseleave", () => {
    content.classList.remove(selector);
  });

  content.addEventListener("mouseleave", () => {
    content.classList.remove(selector);
  });
};

export { setUpClickDropdown, setUpHoverDropdown };
