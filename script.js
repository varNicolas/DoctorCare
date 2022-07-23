window.addEventListener('scroll', onScroll)
onScroll();
function onScroll(){
showMeNavOnScroll();
showBackToTopButton();
}
function showMeNavOnScroll() {
  let navigation = document.getElementById('navigation');
  if(scrollY > 40){
    navigation.classList.add('scroll');
  } else{
    navigation.classList.remove('scroll');
  }
}
function showBackToTopButton() {
  if(scrollY > 760){
    backToTopButton.classList.add('show');
  } else{
    backToTopButton.classList.remove('show');
  }
}
function colorButtonBackToTop (){
  if(scrollY >=560){
    
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded');
}
function closeMenu(){
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
}).reveal(`
#home,
 #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);