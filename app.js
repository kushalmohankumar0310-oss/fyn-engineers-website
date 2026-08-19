/**
 * FYN Engineers Pvt. Ltd. - Core Application Script
 * Dynamically populates UI components from siteContent object.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Drawer Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close drawer when clicking any link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 4000);
            }
        });
    }

    // 3. Scroll Spy Navigation Highlight
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    const scrollSpyOptions = {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });

    // Fallback for bottom of page (Contact section)
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
            navItems.forEach(item => {
                if (item.getAttribute('href') === '#contact') {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
});
