const book = document.querySelector(".book");
const fontSizeControls = document.querySelectorAll(".font-size");
const textColorControls = document.querySelectorAll("[data-text-color]");
const bgColorControls = document.querySelectorAll("[data-bg-color]");

fontSizeControls.forEach((control) => {
  control.addEventListener("click", () => {
    fontSizeControls.forEach((button) =>
      button.classList.remove("font-size_active")
    );

    control.classList.add("font-size_active");

    const size = control.getAttribute("data-size");
    book.classList.remove("book_fs-small", "book_fs-big");

    switch (size) {
      case "small":
        book.classList.add("book_fs-small");
        break;
      case "big":
        book.classList.add("book_fs-big");
        break;
      default:
        book.classList.remove("book_fs-small", "book_fs-big");
        break;
    }

    event.preventDefault();
  });
});

textColorControls.forEach((control) => {
  control.addEventListener("click", () => {
    textColorControls.forEach((button) =>
      button.classList.remove("color_active")
    );

    control.classList.add("color_active");

    const color = control.getAttribute("data-text-color");
    book.classList.remove("book_color-gray", "book_color-whitesmoke");

    switch (color) {
      case "gray":
        book.classList.add("book_color-gray");
        break;
      case "whitesmoke":
        book.classList.add("book_color-whitesmoke");
        break;
      default:
        book.classList.remove("book_color-gray", "book_color-whitesmoke");
        break;
    }

    event.preventDefault();
  });
});

bgColorControls.forEach((control) => {
  control.addEventListener("click", () => {
    bgColorControls.forEach((button) =>
      button.classList.remove("color_active")
    );

    control.classList.add("color_active");

    const color = control.getAttribute("data-bg-color");
    book.classList.remove("book_bg-gray", "book_bg-white");

    switch (color) {
      case "gray":
        book.classList.add("book_bg-gray");
        break;
      case "black":
        book.classList.add("book_bg-black");
        break;
      default:
        book.classList.remove("book_bg-gray", "book_bg-black");
        break;
    }

    event.preventDefault();
  });
});
