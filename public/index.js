let hamburger = document.querySelector('.hamMenu')
let navList = document.querySelector('.navList')
let links = document.querySelector('.navList li')

hamburger.addEventListener('click', function () {
  this.classList.toggle('click')
  navList.classList.toggle('open')
})
