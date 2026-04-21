function animateTitles() {
  const titles = document.querySelectorAll('[data-animate-title], .animate-title');
  if (!titles.length) return;

  // Determine animation class based on page
  let animClass = 'anim1'; // default
  const path = window.location.pathname;
  if (path.includes('index.html')) animClass = 'anim1';
  else if (path.includes('cafe-arabia.html')) animClass = 'anim2';
  else if (path.includes('cafe-brujula.html')) animClass = 'anim3';
  else if (path.includes('cafebre.html')) animClass = 'anim4';
  else if (path.includes('ciento11.html')) animClass = 'anim5';
  else if (path.includes('teikirisi.html')) animClass = 'anim6';

  titles.forEach((title) => {
    // Remove any existing animation classes
    title.classList.remove('title-animate-enter', 'anim1', 'anim2', 'anim3', 'anim4', 'anim5', 'anim6');
    void title.offsetWidth; // Trigger reflow
    title.classList.add(animClass);
  });
}

window.addEventListener('DOMContentLoaded', animateTitles);
window.addEventListener('load', animateTitles);
window.addEventListener('popstate', animateTitles);
window.addEventListener('hashchange', animateTitles);

// For simple multipage navigation, this also works when the browser restores a cached page.
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    animateTitles();
  }
});
