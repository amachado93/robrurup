(function() {
  const menuButton = document.getElementsByClassName('the-menu');
  const menuBox = document.getElementsByClassName('menu-box')

  menuButton[0].addEventListener('click', function toggleMenu() {
    if (menuBox[0].style.display == 'block') {
      menuBox[0].style.display = 'none';
    } else {
      menuBox[0].style.display = 'block';
    }
  })

})()
