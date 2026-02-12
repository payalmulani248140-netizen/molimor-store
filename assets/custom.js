document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".filter_btn");
  const target = document.querySelector(".facets-vertical");
  const product = document.querySelector("#product-grid");

  if (btn && target) {
    btn.addEventListener("click", function () {
      if (product.classList.contains("grid--4-col-desktop")) {
        product.classList.remove("grid--4-col-desktop");
        product.classList.add("grid--3-col-desktop");
      } else if (product.classList.contains("grid--3-col-desktop")) {
        product.classList.remove("grid--3-col-desktop");
        product.classList.add("grid--4-col-desktop");
      }
      target.classList.toggle("sidebar-active");
    });
  }
});
