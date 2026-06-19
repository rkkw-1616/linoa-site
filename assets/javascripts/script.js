document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".c-hamburgerButton");
  const globalNav = document.querySelector(".p-topContents__bottom");
  if (!hamburgerButton || !globalNav) return;

  hamburgerButton.addEventListener("click", () => {
    const isOpen = hamburgerButton.classList.toggle("is-open");
    globalNav.classList.toggle("is-open");

    hamburgerButton.setAttribute("aria-expanded", String(isOpen));
    hamburgerButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く",
    );
  });
});
