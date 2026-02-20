// Main JavaScript file for Wordwell site
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const html = document.getElementsByTagName('html')[0];

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      body.classList.toggle('overflow-hidden');
      html.classList.toggle('overflow-hidden');

      if (mobileMenu.classList.contains('open')) {
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
