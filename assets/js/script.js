const headerMenuToggle = document.querySelector('.header-menu-toggle')
headerMenuToggle.addEventListener('click', function () {
  this.classList.toggle('open')
  this.querySelector('i').classList.toggle('fa-x')
})
