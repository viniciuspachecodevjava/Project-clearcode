function initAnimateSmoth() {
  const animationSection = document.querySelectorAll('.js-scroll');
  const metadeWindow = window.innerHeight * 0.6;

  function sectionTop() {
    animationSection.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top - metadeWindow;
      const classActive = 'ativo';

      console.log(elementTop);
      if (elementTop < 0) {
        element.classList.add(classActive);
      }
    })
  }
  sectionTop();
  window.addEventListener('scroll', sectionTop);
}
initAnimateSmoth();
function initAnimateScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  linkInterno.forEach((item) => {
    item.addEventListener('click', animateScroll);
  })

  function animateScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const selectHref = document.querySelector(href);

    selectHref.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}


initAnimateScroll();