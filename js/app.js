//GET ELEMENTS FROM THE DOM
const header = document.querySelector('header')
const navLinks = document.querySelectorAll('header ul li a')
const hamburgerMenu = document.querySelector('.hamburger-menu i')
const closeBtn = document.querySelector('.closeBtn')
const submitBtn = document.querySelector('#submitBtn')
const mobileNav = document.querySelector('#mobileNav')
const navBtn = document.querySelector('#navBtn')
const headerSocials = document.querySelectorAll(
    '.header__socials i'
)

const body = document.querySelector('body')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const contactForm = document.querySelector('.form')
const validateInput = document.querySelector('.error')


//SET HEADER ACTIVE ON SCROLL
function fixNav() {

    navLinks.forEach(navLink => {
       headerSocials.forEach(socials =>{
        if (window.scrollY > header.offsetHeight + 50) {
            header.classList.add('active')
            navBtn.classList.remove('btn-outline')
            navLink.style.color = '#00637C'
            hamburgerMenu.style.color = '#00637C'
            socials.style.color = '#00637C'
        } else {
            header.classList.remove('active')
            navLink.style.color = '#fff'
            socials.style.color = '#fff'
            navBtn.classList.add('btn-outline')
            hamburgerMenu.style.color = '#fff'
        }
        // console.log(navLink, 'Yeee')
       })
    });
}

window.addEventListener('scroll', fixNav)

//MOBILE NAVIGATION
hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.add('show');
    body.style.overflow = 'hidden'
})
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    body.style.overflow = 'scroll'
})




// FAQ SECTION
function toggleSection(faqNumber) {
    const section = document.getElementById('section' + faqNumber);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        section.style.transitionDuration = '.4s'
        section.style.transitionTimingFunction = 'ease'
    } else {
        section.style.display = 'none';
    }
}


// ANIMATE ON SCROLL

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
