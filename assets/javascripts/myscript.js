const body = document.querySelector('body'), html = document.querySelector('html');
html.style.cursor = 'not-allowed';
body.style.pointerEvents = 'none';

window.addEventListener('load', function(){
  document.getElementById('preloader').classList.add('hide');
  
  setTimeout(function(){
    document.querySelector('.primary-btn').style.transition = '0.3s ease padding';
    for(a of document.querySelectorAll('.social-media a')){
      a.style.transition = '0.3s ease all';
    }

    body.style.pointerEvents = 'auto';
    html.style.cursor = 'auto';
  }, 6000);

  const starts = document.querySelectorAll('.start');
  for(start of starts){
    if(start.classList.contains('grouping')){
      startGruoped();
    } else{
      start.classList.remove('start');
    }
  }
});


function startGruoped(){
  let menuth = 0, sosmedth = 0;
  var menuInterval = setInterval(function(){
    const menuLength = document.querySelectorAll('nav ul li').length, menus = document.querySelectorAll('nav ul li')[menuth];

    menus.className = '';
    menuth++;

    if(menuth === menuLength){
      clearInterval(menuInterval);
      menuInterval = null;
    }
  }, 500);

  var sosmedInterval = setInterval(function(){
    const sosmedLength = document.querySelectorAll('.social-media a').length, sosmeds = document.querySelectorAll('.social-media a')[sosmedth];

    sosmeds.className = '';
    sosmedth++;

    if(sosmedth === sosmedLength){
      clearInterval(sosmedInterval);
      sosmedInterval = null;
    }
  }, 500);
}

const sideBtn = document.querySelector('.side-btn');
sideBtn.addEventListener('click', function(){
  const ul = document.querySelector('nav ul');
  sideBtn.classList.toggle('clicked');
  ul.classList.toggle('show');
});

const main = document.querySelector('main'), pages = document.querySelectorAll('.glass'), links = document.querySelectorAll('nav ul li a');

main.addEventListener('scroll', scrollMain);

function scrollMain(event){
  setTimeout(function(){
    let pageName = '';
  
    pages.forEach(page => {
      pageLeft = page.offsetLeft, pageWidth = page.clientWidth, pageTop = page.offsetTop, pageHeight = page.clientHeight;
  
      if(screen.width < 513){
        if(screen.width <= 280){
          pageTop = page.offsetTop - 91
          if(event.target.scrollTop >= (pageTop - pageHeight / 5)){
            pageName = page.getAttribute('id');
          }
        } else {
          if(event.target.scrollTop >= (pageTop - pageHeight / 3)){
            pageName = page.getAttribute('id');
          }
        }
      } else {
        if(event.target.scrollLeft >= (pageLeft - pageWidth / 3)){
          pageName = page.getAttribute('id');
        }
      }
    });
  
    links.forEach(link => {
      link.classList.remove('active');
      if(link.classList.contains(pageName)){
        link.classList.add('active');
      }
      if(pageName == 'about' || pageName == 'growth'){
        document.querySelector('.circle2').classList.add('hide');
      } else{
        document.querySelector('.circle2').classList.remove('hide');
      }
    });
  }, 650);
}
