function changePageAndTab(pagId, tabId) {
  var divOff = document.getElementsByClassName('active');

  for (var i = 0; i < divOff.length; i++) {
    divOff[i].style.display = 'none';
    divOff[i].className = 'hidden';
  }
  
  var pagina = document.getElementById(pagId);
  pagina.style.display = 'grid';
  pagina.className = 'active';

  var navItems = document.getElementsByClassName('nav-item');
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('active');
  }
  
  var tabs = document.querySelectorAll('.nav-item a');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('on');
  }

  var currentTab = document.getElementById(tabId);
  currentTab.classList.add('on');

  var currentLink = document.getElementById(pagId);
  currentLink.classList.add('on');
}

