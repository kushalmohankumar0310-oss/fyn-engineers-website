/* FYN Engineers Pvt. Ltd. - Interactive Application Logic */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Mobile Navigation & Hamburger Menu
       ========================================================================== */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    /* ==========================================================================
       2. Hybrid Navigation (Scrolling & Fullscreen Views Router)
       ========================================================================== */
    const mainHomepage = document.getElementById('main-homepage');
    const projectsView = document.getElementById('projects-view');
    const careersView = document.getElementById('careers-view');

    // Routing table helper
    function handleRoute() {
        const hash = window.location.hash || '#home';
        
        // Remove active class from all header links first
        navLinks.forEach(link => link.classList.remove('active'));

        if (hash === '#/projects') {
            // Open Projects Fullscreen View
            mainHomepage.classList.add('d-none');
            careersView.classList.remove('active');
            projectsView.classList.add('active');
            document.getElementById('nav-projects-btn').classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock main scroll
            window.scrollTo(0, 0);
        } else if (hash === '#/careers') {
            // Open Careers Fullscreen View
            mainHomepage.classList.add('d-none');
            projectsView.classList.remove('active');
            careersView.classList.add('active');
            document.getElementById('nav-careers-btn').classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock main scroll
            window.scrollTo(0, 0);
        } else {
            // Main Homepage sections (Smooth Scroll mode)
            mainHomepage.classList.remove('d-none');
            projectsView.classList.remove('active');
            careersView.classList.remove('active');
            document.body.style.overflow = ''; // Unlock main scroll

            // Find target section and scroll to it
            const targetId = hash.replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Perform scroll
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight link
                const activeLink = document.querySelector(`.nav-link[data-scroll-target="${targetId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        }
    }

    // Listen for hash modifications
    window.addEventListener('hashchange', handleRoute);
    // Initial run on page load
    handleRoute();

    // Close fullscreen views handlers
    document.getElementById('close-projects-btn').addEventListener('click', () => {
        window.location.hash = '#home';
    });
    document.getElementById('close-careers-btn').addEventListener('click', () => {
        window.location.hash = '#home';
    });


    /* ==========================================================================
       3. Scroll Spy (Updates active nav link based on scroll position)
       ========================================================================== */
    const sections = document.querySelectorAll('main > section');
    
    window.addEventListener('scroll', () => {
        // Skip scroll spy if we are currently viewing fullscreen overlays
        if (!mainHomepage.classList.contains('d-none')) {
            let current = '';
            const scrollPos = window.scrollY + 120; // offset header height

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPos >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-scroll-target') === current) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });


    /* ==========================================================================
       4. Leaflet.js Interactive Map Setup
       ========================================================================== */
    // Initialize map centering on Indiranagar, Bangalore coordinates
    const map = L.map('map', {
        scrollWheelZoom: false
    }).setView([12.9719, 77.6412], 15);

    // Dark-themed tiles to match Fyn website aesthetic
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom design marker
    const marker = L.marker([12.9719, 77.6412]).addTo(map);
    marker.bindPopup(`
        <div style="font-family: 'Inter', sans-serif; color: #0f172a;">
            <strong style="color: #38bdf8;">FYN Engineers Pvt. Ltd.</strong><br>
            No. 42, 100 Feet Road, Indiranagar<br>
            Bangalore - 560038
        </div>
    `).openPopup();


    /* ==========================================================================
       5. Interactive Requirements Estimator
       ========================================================================== */
    const estimatorType = document.getElementById('estimator-type');
    const inputsSolar = document.getElementById('inputs-solar');
    const inputsWater = document.getElementById('inputs-water');
    const inputsBackup = document.getElementById('inputs-backup');
    const btnCalculate = document.getElementById('btn-calculate');
    const resultPlaceholder = document.querySelector('.result-placeholder');
    const resultContent = document.getElementById('result-content');
    const resultTitle = document.getElementById('result-title');
    const metricSize = document.getElementById('metric-size');
    const metricSizeLabel = document.getElementById('metric-size-label');
    const metricSavings = document.getElementById('metric-savings');
    const metricSavingsLabel = document.getElementById('metric-savings-label');
    const resultDesc = document.getElementById('result-desc');
    const btnPrefillSurvey = document.getElementById('btn-prefill-survey');

    // Toggle fields based on dropdown change
    estimatorType.addEventListener('change', (e) => {
        const type = e.target.value;
        inputsSolar.classList.add('d-none');
        inputsWater.classList.add('d-none');
        inputsBackup.classList.add('d-none');

        if (type === 'solar') {
            inputsSolar.classList.remove('d-none');
        } else if (type === 'water') {
            inputsWater.classList.remove('d-none');
        } else if (type === 'backup') {
            inputsBackup.classList.remove('d-none');
        }
        
        // Hide result content and reset to placeholder on switch
        resultContent.classList.add('d-none');
        resultPlaceholder.classList.remove('d-none');
    });

    // Estimation Logic Calculations
    let currentCalculation = null;

    btnCalculate.addEventListener('click', () => {
        const type = estimatorType.value;
        let valid = false;

        if (type === 'solar') {
            const bill = parseFloat(document.getElementById('input-bill').value);
            if (bill > 0) {
                valid = true;
                const capacity = bill / 1000; // kW (e.g. 5000 INR bill -> 5 kW)
                const savings = bill * 0.85; // 85% savings
                const space = Math.round(capacity * 80); // 80 sq.ft per kW

                metricSize.textContent = `${capacity.toFixed(1)} kW`;
                metricSizeLabel.textContent = 'Suggested Grid Capacity';
                metricSavings.textContent = `₹${Math.round(savings).toLocaleString()}`;
                metricSavingsLabel.textContent = 'Est. Monthly Savings';
                resultTitle.textContent = 'Custom Solar Grid recommendation';
                resultDesc.textContent = `A grid system of this capacity requires approx. ${space} sq.ft. of shadow-free rooftop space.`;
                
                currentCalculation = {
                    solution: 'Solar Power Grid',
                    capacity: `${capacity.toFixed(1)} kW`,
                    interest: 'solar'
                };
            }
        } else if (type === 'water') {
            const liters = parseFloat(document.getElementById('input-liters').value);
            if (liters > 0) {
                valid = true;
                const flowRate = liters / 24; // Average flow required per hour

                metricSize.textContent = `${Math.ceil(flowRate)} L/H`;
                metricSizeLabel.textContent = 'Required Flow Rate';
                metricSavings.textContent = '99.9%';
                metricSavingsLabel.textContent = 'Purity Rate (TDS Reduc.)';
                resultTitle.textContent = 'Custom Water Filtration Plant';
                resultDesc.textContent = 'Recommended multi-stage RO + UV filtration module. Source water test required during survey.';
                
                currentCalculation = {
                    solution: 'Water Filtration',
                    capacity: `${Math.ceil(flowRate)} L/H`,
                    interest: 'water'
                };
            }
        } else if (type === 'backup') {
            const watts = parseFloat(document.getElementById('input-watts').value);
            const hours = parseFloat(document.getElementById('input-hours').value);

            if (watts > 0 && hours > 0) {
                valid = true;
                const wh = watts * hours * 1.25; // Watt-hours with safety margins
                const kwh = wh / 1000;

                metricSize.textContent = `${kwh.toFixed(1)} kWh`;
                metricSizeLabel.textContent = 'Battery Storage Required';
                metricSavings.textContent = '0 ms';
                metricSavingsLabel.textContent = 'Backup Transfer Delay';
                resultTitle.textContent = 'Uninterruptible UPS Backup Grid';
                resultDesc.textContent = `Designed to run continuous ${watts}W loads for up to ${hours} hours under dual-source battery operations.`;
                
                currentCalculation = {
                    solution: 'UPS Backup System',
                    capacity: `${kwh.toFixed(1)} kWh`,
                    interest: 'backup'
                };
            }
        }

        if (valid) {
            resultPlaceholder.classList.add('d-none');
            resultContent.classList.remove('d-none');
        } else {
            alert('Please enter valid numeric inputs greater than zero.');
        }
    });

    // Prefill Contact form from Estimator
    btnPrefillSurvey.addEventListener('click', () => {
        if (currentCalculation) {
            const contactInterest = document.getElementById('contact-interest');
            const contactMessage = document.getElementById('contact-message');
            
            contactInterest.value = currentCalculation.interest;
            contactMessage.value = `Hi Fyn Engineers Team,\n\nI ran the website estimator and require an on-site survey. I am looking for a custom ${currentCalculation.solution} with a calculated requirement of ${currentCalculation.capacity}.\n\nPlease let me know when your engineering team can visit the site.`;
            
            // Navigate to contact
            window.location.hash = '#contact';
        }
    });


    /* ==========================================================================
       6. Projects Gallery Filtering
       ========================================================================== */
    const filterButtons = document.querySelectorAll('#project-filters .filter-btn');
    const projectCards = document.querySelectorAll('#projects-grid-container .project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active from other filter buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    /* ==========================================================================
       7. Careers Board (Accordions & Applications)
       ========================================================================== */
    const jobItems = document.querySelectorAll('.job-item');

    // Toggle job details accordion
    jobItems.forEach(item => {
        const summary = item.querySelector('.job-summary');
        
        // Prevent click trigger when clicking the "Apply Now" button inside summary
        summary.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-apply-job')) return;
            item.classList.toggle('expanded');
        });
    });

    // Handle Application Modals
    const applyButtons = document.querySelectorAll('.btn-apply-job');
    const applicationModal = document.getElementById('application-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalJobTitle = document.getElementById('modal-job-title');
    const appJobNameInput = document.getElementById('app-job-name');
    const jobApplicationForm = document.getElementById('job-application-form');

    applyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const jobTitle = btn.getAttribute('data-job');
            modalJobTitle.textContent = `Apply for: ${jobTitle}`;
            appJobNameInput.value = jobTitle;
            applicationModal.classList.remove('d-none');
        });
    });

    closeModalBtn.addEventListener('click', () => {
        applicationModal.classList.add('d-none');
    });

    // Close modal on background overlay click
    applicationModal.addEventListener('click', (e) => {
        if (e.target === applicationModal) {
            applicationModal.classList.add('d-none');
        }
    });

    // Submit Job Application Form
    jobApplicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-submit-application');
        const origText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Uploading Application...';

        setTimeout(() => {
            alert(`Application for "${appJobNameInput.value}" submitted successfully! Our HR team will reach out to you within 3 business days.`);
            jobApplicationForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = origText;
            applicationModal.classList.add('d-none');
        }, 1500); // Simulate network delay
    });


    /* ==========================================================================
       8. General Contact Form Submissions
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-submit-contact');
        const origText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Inquiry...';

        setTimeout(() => {
            alert('Thank you for contacting FYN Engineers! We have received your site survey inquiry. One of our engineers will call you shortly to coordinate details.');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = origText;
        }, 1500); // Simulate network delay
    });

});
