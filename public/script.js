// ==================== Theme Toggle ==================== 
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.title = 'Toggle Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.title = 'Toggle Dark Mode';
    }
}

// ==================== Smooth Scroll ==================== 
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

// ==================== Active Nav Link ==================== 
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Form Handling ==================== 
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // This will be handled by Formspree if you set up the form action
        // Or you can add custom handling here
    });
}

// ==================== Intersection Observer for Animations ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items for animation
document.querySelectorAll('.education-card, .cert-card, .skill-category, .experience-item, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== Mobile Menu Toggle (if needed) ==================== 
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    // You can add a hamburger menu here for mobile if needed
    // This is optional for a static portfolio
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});

// ==================== Scroll to Top Button ==================== 
window.addEventListener('scroll', () => {
    // Optional: Add a scroll-to-top button functionality here if needed
});

console.log('Portfolio website loaded successfully!');
