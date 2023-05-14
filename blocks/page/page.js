const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Анимация Прелоудера
let tl = gsap.timeline();
function ready() {
  tl.to(".PreloaderBlock__text_transparent", { duration: 1,  width: "100%", repeat: -1, yoyo: true });
}

document.addEventListener("DOMContentLoaded", ready);

let t2 = gsap.timeline();
// Анимация появление заголовка
let TimeLineHeader = gsap.timeline();
window.onload = function() {
  tl.pause();
  t2.to(".PreloaderBlock__text_transparent", { duration: 1, width: "100%" });
  t2.to(".PreloaderBlock", { duration: 1.2, y: '-130vh' }, 1);
  t2.to(".PreloaderBlock", { duration: 0, display: "none" }, 2.2);
  TimeLineHeader.fromTo(".header__img", { scale: 1.3, duraction: .5 }, { scale: 1 }, 2.2);
  TimeLineHeader.from(".header__title", { y: '15vh', duraction: 1 }, 2.7);
  TimeLineHeader.fromTo(".header__title", { opacity: 0, duraction: 1 }, { opacity: 1 }, 2.7);
  TimeLineHeader.from(".header__subtitle", { y: '15vh', duraction: 1 }, 3.7);
  TimeLineHeader.fromTo(".header__subtitle", { opacity: 0, duraction: 1 }, { opacity: 1 }, 3.7);
};

// Анимация исчезновения и появления секций
gsap.fromTo("#header", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#header', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#KeanuReeves", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#KeanuReeves', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#DizzyingStunts", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#DizzyingStunts', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#CheerfulBeshka", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#CheerfulBeshka', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#ThoughtfulCinematicUniverse", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#ThoughtfulCinematicUniverse', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#JohnWick", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#JohnWick', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#JohnWick2", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#JohnWick2', start: 'bottom 20%', end: 'bottom top', scrub: true }});
gsap.fromTo("#JohnWick3", { opacity: 1 }, { opacity: 0, scrollTrigger: { trigger: '#JohnWick3', start: 'bottom 20%', end: 'bottom top', scrub: true }});

// Анимация появление постеров и саундтреков
gsap.from("#JohnWick__img", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick__img', start: 'top center', end: 'center center' }});
gsap.from("#JohnWick__AudioIframe", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick__AudioIframe', start: 'top center', end: 'center center' }});
gsap.from("#JohnWick2__img", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick2__img', start: 'top center', end: 'center center' }});
gsap.from("#JohnWick2__AudioIframe", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick2__AudioIframe', start: 'top center', end: 'center center' }});
gsap.from("#JohnWick3__img", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick3__img', start: 'top center', end: 'center center' }});
gsap.from("#JohnWick3__AudioIframe", { x: '10vw', opacity: 0, scrollTrigger: { trigger: '#JohnWick3__AudioIframe', start: 'top center', end: 'center center' }});