// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Existing menu code
const checkbox = document.getElementById("checkbox");
const smallmenu = document.getElementById("smallmenu");

checkbox.addEventListener('click', function(e) {
    e.stopPropagation();
    smallmenu.classList.toggle('d-none');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInside = smallmenu.contains(event.target) || checkbox.contains(event.target);
    if (!isClickInside && !smallmenu.classList.contains('d-none')) {
        smallmenu.classList.add('d-none');
        checkbox.checked = false;
    }
});

// Close menu when clicking menu items
smallmenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        smallmenu.classList.add('d-none');
        checkbox.checked = false;
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.each-skill, .each-project, .contact-box');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}