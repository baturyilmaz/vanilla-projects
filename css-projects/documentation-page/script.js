const toggleButton = document.querySelector("button.toggle-container");
const documentationNav = document.querySelector("nav.doc-nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  documentationNav.classList.toggle("show");
});
