
// icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(
        sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });

    // sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar when click navbar
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};


// scrollreveal.js for Motion
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .projects-box, .contact form ',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });


// typedjs for multiple text
const typed = new Typed('.multiple-text', {
    strings: ['Developer','Programmer','Student','Coder','learner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed1 = new Typed('.tables' , {
    strings: ["Patient's record","Staff's record","Doctor's record","Diagnosis Data"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


const typed2 = new Typed('.java' , {
    strings: ["Class and Objects","Inheritence","Interface","Abstraction","Overriding","overloading","Exception Handling","Threads"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


const typed3 = new Typed('.web' , {
    strings: ["HTML","CSS","JavaScript","ScrollReavealJS","TypedJS","BootStrap"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Alert when clicked on Contacts
function ale(){
    alert("Contact: 7411446841");
}
