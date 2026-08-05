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
});
