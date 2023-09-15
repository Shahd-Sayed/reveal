ScrollReveal().reveal(".reveal", { delay: 150 });
ScrollReveal().reveal(".reveal", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".reveal", { scale: 0.85 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});
