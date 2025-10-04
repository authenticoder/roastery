const mobile = document.querySelector(".mobile");
const display = document.querySelector(".mobile-display");
const prefersReducedMotion = getPrefersReducedMotion();

window.scrollTo({
  top: 0,
  left: 0,
  behavior: prefersReducedMotion ? "auto" : "smooth",
});

function getPrefersReducedMotion() {
  const mediaQueryList = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  const prefersReducedMotion = !mediaQueryList.matches;

  return prefersReducedMotion;
}

function handleClick() {
  display.classList.toggle("active");
}

mobile.addEventListener("click", handleClick);
