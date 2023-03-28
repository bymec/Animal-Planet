const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const menuBtn = document.querySelector('#menu-content');
  menuBtn.classList.toggle('ativo');
  btn.classList.toggle('ativo');
});




/*--Animação FAQ--*/
const sections = document.querySelectorAll('.perguntas');
const h1 = document.querySelectorAll('.perguntas h1');

function secItens (index) {
  sections.forEach((index) => {
    index.classList.remove('ativo');
  });
  sections[index].classList.add('ativo');

  gsap.from('.perguntas span', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: 'back'
  });
};

h1.forEach((item, h1block) => {
  item.addEventListener('click', () => {
    secItens(h1block);
  });
});



/*--Animações com GSAP--*/

gsap.from('header > .logo, a, img, #main h1, p, h2, span, div', {
  y:-50,
  opacity:0,
  ease: 'back',
  stagger: 0.1
});



