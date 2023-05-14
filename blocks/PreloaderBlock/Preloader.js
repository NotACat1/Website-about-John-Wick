let tl = gsap.timeline();
function ready() {
  tl.to(".PreloaderBlock__text_transparent", { duration: 1,  width: "100%", repeat: -1, yoyo: true });
}

document.addEventListener("DOMContentLoaded", ready);

let t2 = gsap.timeline();
window.onload = function() {
  tl.pause();
  t2.to(".PreloaderBlock__text_transparent", { duration: 1, width: "100%" });
  t2.to(".PreloaderBlock", { duration: 1.2, y: '-130vh' }, 1);
  t2.to(".PreloaderBlock", { duration: 0, display: "none" }, 2.2);
};