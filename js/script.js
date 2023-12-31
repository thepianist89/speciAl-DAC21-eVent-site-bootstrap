console.log('Hello brO !!');

function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      navbar.classList.add('bg-success');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-success');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
