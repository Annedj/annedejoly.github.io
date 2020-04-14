export const highlightCurrentSection = () => {
  const sectionsNames = ['.ab', '.ex', '.pr', '.sk', '.ed', '.co'];

  sectionsNames.forEach((name) => {
    const sectionsElements = document.querySelectorAll(name);
    const nav = sectionsElements[0];
    const section = sectionsElements[1];
  });

  const sections = document.querySelectorAll('.section-title');
  const navigation = document.querySelector('.menu-navbar').children;

  sections.forEach((section) => {
    section.addEventListener('hover', (event) => {

    });
  });
};
