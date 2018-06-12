const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
    
function fixNav() {
  if(document.documentElement.clientWidth >= 960){  //only use effect if screen is larger than 960px
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
        } else {
          document.body.classList.remove('fixed-nav');
          document.body.style.paddingTop = 0;
        }
      }
    }

window.addEventListener('scroll', fixNav);

//smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});