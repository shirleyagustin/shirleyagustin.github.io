// Select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove active class from all nav links
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to current nav link
function addActiveClass(current) {
    current.classList.add('active');
}

// Event Listener for Scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    removeActiveClasses();
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
            addActiveClass(link);
        }
    });
});
