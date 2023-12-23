/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

         /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
     /*==================== sticky navbar ====================*/
     let header = document.querySelector('header');

     header.classList.toogle('sticky', window.scrollY > 100);

      /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    // menuIcon.classList.remove('bx-x');
    // navbar.classList.remove('active');
    
};

  
/*==================== scroll reveal ====================*/
// Initialize ScrollReveal with options
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Use the sr instance to reveal elements
sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/

// const typed = new Typed('.multiple-text', {
//     strings: ['3d Artist', 'Product Designer.'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 100,
//     loop: true
// });
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.multiple-text', {
        strings: ['','3d Artist', 'Product Designer.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000, // Increase backDelay to have a pause before looping
        loop: true
    });
})

/*==================== typed js ====================*/
document.addEventListener('DOMContentLoaded', function () {
    const partialContent = document.getElementById('partialContent');
    const fullContent = document.getElementById('fullContent');
    const readMoreBtn = document.getElementById('readMoreBtn');

    let isFullContentVisible = false;

    readMoreBtn.addEventListener('click', function () {
        // Toggle visibility of content
        isFullContentVisible = !isFullContentVisible;
        partialContent.style.display = isFullContentVisible ? 'none' : 'block';
        fullContent.style.display = isFullContentVisible ? 'block' : 'none';

        // Change button text based on the state
        readMoreBtn.textContent = isFullContentVisible ? 'Read Less' : 'Read More';
    });
});
