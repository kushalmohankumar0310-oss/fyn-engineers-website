/**
 * FYN Engineers Pvt. Ltd. - Core Application Script (Launch Calibration)
 */

document.addEventListener('DOMContentLoaded', () => {
    const GOOGLE_SHEET_URL = "";

    // 1. Mobile Menu Drawer Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Lead Download Handler (Backup CSV Logger)
    const setupDownloader = () => {
        const downloader = document.getElementById('lead-downloader');
        if (downloader) {
            downloader.addEventListener('click', (e) => {
                e.preventDefault();
                const stored = localStorage.getItem('fyn_leads');
                const leads = stored ? JSON.parse(stored) : [];
                
                if (leads.length === 0) {
                    alert('No lead inquiries registered on this machine yet.');
                    return;
                }

                let csv = 'Date,Name,Phone,Email,Vertical,Details,Status\n';
                leads.forEach(l => {
                    csv += `"${l.date}","${l.name}","${l.phone}","${l.email}","${l.vertical}","${l.details.replace(/"/g, '""')}","${l.status}"\n`;
                });

                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.setAttribute('download', 'fyn_leads_log.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };

    // 3. Form Validations & Inline Transitions
    const contactForm = document.getElementById('contact-form');
    const formStatePanel = document.getElementById('contact-form-state');
    const successStatePanel = document.getElementById('submitted-success-panel');
    const calcStatePanel = document.getElementById('inline-calculator-panel');
    const btnTriggerCalc = document.getElementById('btn-trigger-calc');
    
    const aquaWrapper = document.getElementById('aqua-calc-wrapper');
    const energyWrapper = document.getElementById('energy-calc-wrapper');

    let selectedVertical = '';

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clean error states
            document.querySelectorAll('.form-error-msg').forEach(el => el.style.display = 'none');
            
            const nameField = document.getElementById('form-name');
            const phoneField = document.getElementById('form-phone');
            const emailField = document.getElementById('form-email');
            const verticalField = document.getElementById('form-vertical');
            const detailsField = document.getElementById('form-details');

            let isValid = true;

            // Validate Name
            if (!nameField.value.trim()) {
                document.getElementById('error-name').style.display = 'block';
                isValid = false;
            }

            // Validate Phone (Exactly 10 digits numeric)
            const cleanPhone = phoneField.value.replace(/\D/g, '');
            if (!cleanPhone || cleanPhone.length !== 10) {
                document.getElementById('error-phone').style.display = 'block';
                isValid = false;
            }

            // Validate Service Vertical
            if (!verticalField.value) {
                document.getElementById('error-vertical').style.display = 'block';
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            selectedVertical = verticalField.value;

            // Prepare Lead Payload
            const leadData = {
                date: new Date().toISOString().split('T')[0],
                name: nameField.value.trim(),
                phone: '+91 ' + cleanPhone,
                email: emailField.value.trim() || 'N/A',
                vertical: selectedVertical,
                details: detailsField.value.trim() || 'N/A',
                status: 'Not Contacted'
            };

            // Save locally in mock localStorage
            const stored = localStorage.getItem('fyn_leads');
            const leads = stored ? JSON.parse(stored) : [];
            leads.push(leadData);
            localStorage.setItem('fyn_leads', JSON.stringify(leads));

            // POST Lead to Google Sheet Webhook if configured
            if (GOOGLE_SHEET_URL) {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                }).catch(err => console.error('Google Sheet Post Error:', err));
            }

            // Transition from Form to Success Card
            formStatePanel.style.display = 'none';
            successStatePanel.style.display = 'block';

            // Show "Calculate Savings" CTA only for Aqua & Energy verticals
            if (selectedVertical === 'FYN Aqua' || selectedVertical === 'FYN Energy') {
                btnTriggerCalc.style.display = 'block';
            } else {
                btnTriggerCalc.style.display = 'none'; // AMC Support shows just success checkmark
            }

            setupDownloader();
        });
    }

    // "Calculate Your Savings" Click Trigger -> Transition to Inline Calculator
    if (btnTriggerCalc) {
        btnTriggerCalc.addEventListener('click', () => {
            successStatePanel.style.display = 'none';
            calcStatePanel.style.display = 'block';

            if (selectedVertical === 'FYN Aqua') {
                aquaWrapper.style.display = 'block';
                energyWrapper.style.display = 'none';
                document.getElementById('calc-users').value = 50;
                recalculateHeatPump();
            } else if (selectedVertical === 'FYN Energy') {
                aquaWrapper.style.display = 'none';
                energyWrapper.style.display = 'block';
            }
        });
    }

    // 4. HEAT PUMP INTERACTIVE CALCULATOR ENGINE
    const calcApp = document.getElementById('calc-app');
    const calcUsers = document.getElementById('calc-users');
    const calcLiters = document.getElementById('calc-liters');
    const calcExisting = document.getElementById('calc-existing');
    const calcRate = document.getElementById('calc-rate');
    const calcRateLabel = document.getElementById('calc-rate-label');
    const calcSystemCost = document.getElementById('calc-system-cost');

    const appMultipliers = {
        hotel: 50,
        hospital: 40,
        hostel: 35,
        apartment: 40,
        restaurant: 15,
        industrial: 25,
        commercial: 10,
        residential: 40,
        other: 30
    };

    const fuelDefaultRates = {
        electric: 8.0,
        diesel: 90.0,
        lpg: 95.0,
        firewood: 10.0
    };

    const fuelLabels = {
        electric: 'Electricity Cost (₹/kWh)',
        diesel: 'Diesel Cost (₹/L)',
        lpg: 'LPG Cost (₹/kg)',
        firewood: 'Wood Cost (₹/kg)'
    };

    function recalculateHeatPump() {
        if (!calcApp || !calcUsers || !calcLiters) return;

        const app = calcApp.value;
        const users = parseInt(calcUsers.value) || 1;
        
        let dailyLiters = parseInt(calcLiters.value);
        
        const recommendedCapacity = Math.round(dailyLiters / 4);
        const hpElectricityUse = Math.round(dailyLiters * 0.01);
        const elecRate = 8.0;
        const calcElecCost = parseFloat(calcRate.value) || elecRate;
        const dailyHPCost = hpElectricityUse * calcElecCost;

        const estimatedUnitCost = recommendedCapacity * 800;
        if (document.activeElement !== calcSystemCost) {
            calcSystemCost.value = Math.max(80000, Math.round(estimatedUnitCost));
        }
        const sysCostInput = parseInt(calcSystemCost.value) || 150000;

        const existingSystem = calcExisting.value;
        const inputCostRate = parseFloat(calcRate.value) || 1.0;
        
        let existingEnergyUse = dailyLiters * 0.04;
        let existingCost = 0;
        let existingEnergyLabel = '';

        if (existingSystem === 'electric') {
            existingCost = existingEnergyUse * inputCostRate;
            existingEnergyLabel = Math.round(existingEnergyUse) + ' kWh';
        } else if (existingSystem === 'diesel') {
            const dieselLitersUsed = existingEnergyUse / 7.0;
            existingCost = dieselLitersUsed * inputCostRate;
            existingEnergyLabel = dieselLitersUsed.toFixed(1) + ' L';
        } else if (existingSystem === 'lpg') {
            const lpgKgUsed = existingEnergyUse / 9.75;
            existingCost = lpgKgUsed * inputCostRate;
            existingEnergyLabel = lpgKgUsed.toFixed(1) + ' kg';
        } else if (existingSystem === 'firewood') {
            const woodKgUsed = existingEnergyUse / 2.25;
            existingCost = woodKgUsed * inputCostRate;
            existingEnergyLabel = Math.round(woodKgUsed) + ' kg';
        }

        const dailySavings = Math.max(0, existingCost - dailyHPCost);
        const monthlySavings = dailySavings * 30;
        const annualSavings = dailySavings * 365;
        const paybackPeriod = annualSavings > 0 ? (sysCostInput / annualSavings).toFixed(1) : 'N/A';

        document.getElementById('output-capacity').textContent = recommendedCapacity + ' L/Hr Capacity';
        document.getElementById('output-consumption').textContent = 'Electricity: ' + hpElectricityUse + ' kWh / day';
        
        document.getElementById('table-existing-daily').textContent = '₹' + Math.round(existingCost).toLocaleString('en-IN');
        document.getElementById('table-hp-daily').textContent = '₹' + Math.round(dailyHPCost).toLocaleString('en-IN');
        
        document.getElementById('table-existing-monthly').textContent = '₹' + Math.round(existingCost * 30).toLocaleString('en-IN');
        document.getElementById('table-hp-monthly').textContent = '₹' + Math.round(dailyHPCost * 30).toLocaleString('en-IN');
        
        // Use shorter notation (e.g. 233.6k) to fit card layout perfectly
        const formatK = (val) => (val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val);
        document.getElementById('table-existing-annual').textContent = '₹' + formatK(Math.round(existingCost * 365));
        document.getElementById('table-hp-annual').textContent = '₹' + formatK(Math.round(dailyHPCost * 365));

        document.getElementById('output-annual-savings').textContent = '₹' + Math.round(annualSavings).toLocaleString('en-IN') + ' / Yr';
        document.getElementById('output-payback').textContent = 'Payback: ' + paybackPeriod + ' Years';
    }

    // Attach Event Listeners to Calculator Controls
    if (calcApp) {
        calcApp.addEventListener('change', () => {
            const app = calcApp.value;
            const users = parseInt(calcUsers.value) || 1;
            const litersPerPerson = appMultipliers[app] || 30;
            calcLiters.value = users * litersPerPerson;
            recalculateHeatPump();
        });
    }

    if (calcUsers) {
        calcUsers.addEventListener('input', () => {
            const app = calcApp.value;
            const users = parseInt(calcUsers.value) || 1;
            const litersPerPerson = appMultipliers[app] || 30;
            calcLiters.value = users * litersPerPerson;
            recalculateHeatPump();
        });
    }

    if (calcLiters) {
        calcLiters.addEventListener('input', recalculateHeatPump);
    }

    if (calcExisting) {
        calcExisting.addEventListener('change', () => {
            const sys = calcExisting.value;
            calcRateLabel.textContent = fuelLabels[sys];
            calcRate.value = fuelDefaultRates[sys];
            recalculateHeatPump();
        });
    }

    if (calcRate) {
        calcRate.addEventListener('input', recalculateHeatPump);
    }

    if (calcSystemCost) {
        calcSystemCost.addEventListener('input', recalculateHeatPump);
    }

    // 5. Scroll Spy Navigation Highlight
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
        if (section.getAttribute('id') !== 'projects') {
            scrollSpyObserver.observe(section);
        }
    });

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
