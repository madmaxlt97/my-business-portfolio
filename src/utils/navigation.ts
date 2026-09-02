export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
  window.history.replaceState(null, "", window.location.pathname);
}
