const hamburgerButton = document.querySelector(".c-hamburgerButton");
const headerNav = document.querySelector(".p-header__nav");
if (hamburgerButton && headerNav) {
  hamburgerButton.addEventListener("click", () => {
    const isOpen = hamburgerButton.classList.toggle("is-open");
    headerNav.classList.toggle("is-open", isOpen);
    hamburgerButton.setAttribute("aria-expanded", isOpen);
  });
}
const dropdownButtons = document.querySelectorAll(
  ".p-nav--sp .c-dropdownButton",
);
dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.innerWidth > 999) return;
    const dropdown = button.closest(".p-dropdown");
    const isOpen = dropdown.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen);
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 999) {
    document.querySelectorAll(".p-nav--sp .p-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("is-open");
    });
    document
      .querySelectorAll(".p-nav--sp .c-dropdownButton")
      .forEach((button) => {
        button.setAttribute("aria-expanded", "false");
      });
    if (hamburgerButton && headerNav) {
      hamburgerButton.classList.remove("is-open");
      headerNav.classList.remove("is-open");
      hamburgerButton.setAttribute("aria-expanded", "false");
    }
  }
});
const spNavLinks = document.querySelectorAll(
  ".p-nav--sp a, .p-headerLink--sp a",
);
spNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!hamburgerButton || !headerNav) return;
    hamburgerButton.classList.remove("is-open");
    headerNav.classList.remove("is-open");
    hamburgerButton.setAttribute("aria-expanded", "false");
  });
});
