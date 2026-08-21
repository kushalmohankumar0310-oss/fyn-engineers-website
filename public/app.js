/**
 * FYN Engineers Pvt. Ltd. - Core Application Script (Launch Calibration)
 */

document.addEventListener('DOMContentLoaded', () => {
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwzuLGTevuQPbvLGpTYxAab-ctrr1BpMv_77EnZNkC2hT8kGy83gYq6SIQN19hFqdCmdQ/exec";

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

    // 2. Form Validations & Inline Transitions
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
            const addressField = document.getElementById('form-address');
            const emailField = document.getElementById('form-email');
            const verticalField = document.getElementById('form-vertical');
            const detailsField = document.getElementById('form-details');

            let isValid = true;

            // Validate Name
            if (!nameField.value.trim()) {
                document.getElementById('error-name').style.display = 'block';
                isValid = false;
            }

            // Validate Phone & Normalize (Extract last 10 digits if user includes country code +91 or leading 0)
            let cleanPhone = phoneField.value.replace(/\D/g, '');
            if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
                cleanPhone = cleanPhone.slice(2);
            } else if (cleanPhone.length === 11 && cleanPhone.startsWith('0')) {
                cleanPhone = cleanPhone.slice(1);
            }
            
            if (!cleanPhone || cleanPhone.length !== 10) {
                document.getElementById('error-phone').style.display = 'block';
                isValid = false;
            }

            // Validate Installation Address
            if (!addressField.value.trim()) {
                document.getElementById('error-address').style.display = 'block';
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
                address: addressField.value.trim(),
                email: emailField.value.trim() || 'N/A',
                vertical: selectedVertical,
                details: detailsField.value.trim() || 'N/A',
                status: 'Not Contacted'
            };

            // Save locally in mock localStorage (wrapped in try-catch to prevent crashes in private windows or local files)
            try {
                const stored = localStorage.getItem('fyn_leads');
                const leads = stored ? JSON.parse(stored) : [];
                leads.push(leadData);
                localStorage.setItem('fyn_leads', JSON.stringify(leads));
            } catch (storageErr) {
                console.warn('LocalStorage access is blocked or unavailable:', storageErr);
            }

            // POST Lead to Google Sheet Webhook if configured (URL-Encoded for native Google Apps Script parsing)
            if (GOOGLE_SHEET_URL) {
                try {
                    const postParams = new URLSearchParams();
                    for (const key in leadData) {
                        postParams.append(key, leadData[key]);
                    }
                    
                    fetch(GOOGLE_SHEET_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: postParams
                    }).catch(err => console.error('Google Sheet Post Error:', err));
                } catch (fetchErr) {
                    console.error('Fetch post call failed synchronously:', fetchErr);
                }
            }

            // Transition from Form to Success Card
            formStatePanel.style.display = 'none';
            successStatePanel.style.display = 'block';

            // Show "Calculate Savings" CTA only for Aqua & Energy verticals
            if (selectedVertical === 'FYN Aqua' || selectedVertical === 'FYN Energy') {
                btnTriggerCalc.style.display = 'block';
            } else {
                btnTriggerCalc.style.display = 'none';
            }
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
                resetCalculatorToBlank();
            } else if (selectedVertical === 'FYN Energy') {
                aquaWrapper.style.display = 'none';
                energyWrapper.style.display = 'block';
                resetSolarToBlank();
            }
        });
    }

    // Typical average domestic/commercial electricity tariff in India by State (₹/kWh)
    const stateElectricityRates = {
        "Andhra Pradesh": 7.0,
        "Arunachal Pradesh": 5.5,
        "Assam": 7.0,
        "Bihar": 7.5,
        "Chhattisgarh": 6.2,
        "Goa": 5.0,
        "Gujarat": 6.5,
        "Haryana": 6.8,
        "Himachal Pradesh": 5.0,
        "Jharkhand": 6.5,
        "Karnataka": 7.5,
        "Kerala": 6.5,
        "Madhya Pradesh": 7.3,
        "Maharashtra": 8.5,
        "Manipur": 6.0,
        "Meghalaya": 6.0,
        "Mizoram": 5.5,
        "Nagaland": 5.5,
        "Odisha": 6.0,
        "Punjab": 6.5,
        "Rajasthan": 7.5,
        "Sikkim": 5.0,
        "Tamil Nadu": 7.0,
        "Telangana": 7.0,
        "Tripura": 6.0,
        "Uttarakhand": 5.5,
        "Uttar Pradesh": 7.0,
        "West Bengal": 7.2,
        "Delhi": 7.0
    };

    // 4. HEAT PUMP INTERACTIVE CALCULATOR ENGINE
    const calcApp = document.getElementById('calc-app');
    const calcUsers = document.getElementById('calc-users');
    const calcLiters = document.getElementById('calc-liters');
    const calcExisting = document.getElementById('calc-existing');
    const calcState = document.getElementById('calc-state');
    const calcRate = document.getElementById('calc-rate');
    const calcRateLabel = document.getElementById('calc-rate-label');

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

    function resetCalculatorToBlank() {
        calcApp.selectedIndex = 0;
        calcUsers.value = '';
        calcLiters.value = '';
        calcExisting.selectedIndex = 0;
        calcState.selectedIndex = 0;
        calcRate.value = '';
        calcRateLabel.textContent = 'Electricity Cost (₹/kWh)';
        
        document.getElementById('calc-placeholder-msg').style.display = 'block';
        document.getElementById('calc-outputs-wrapper').style.display = 'none';
    }

    function recalculateHeatPump() {
        const app = calcApp.value;
        const users = parseInt(calcUsers.value);
        const dailyLiters = parseInt(calcLiters.value);
        const existingSystem = calcExisting.value;
        const stateSelected = calcState.value;
        const rateVal = parseFloat(calcRate.value);

        if (!app || !users || !dailyLiters || !existingSystem || !stateSelected || isNaN(rateVal)) {
            document.getElementById('calc-placeholder-msg').style.display = 'block';
            document.getElementById('calc-outputs-wrapper').style.display = 'none';
            return;
        }

        document.getElementById('calc-placeholder-msg').style.display = 'none';
        document.getElementById('calc-outputs-wrapper').style.display = 'block';
        
        const recommendedCapacity = Math.round(dailyLiters / 4);
        const hpElectricityUse = Math.round(dailyLiters * 0.01);
        const calcElecCost = rateVal;
        const dailyHPCost = hpElectricityUse * calcElecCost;

        const sysCostInput = Math.max(80000, recommendedCapacity * 800);

        let existingEnergyUse = dailyLiters * 0.04;
        let existingCost = 0;
        let existingEnergyLabel = '';

        if (existingSystem === 'electric') {
            existingCost = existingEnergyUse * calcElecCost;
            existingEnergyLabel = Math.round(existingEnergyUse) + ' kWh';
        } else if (existingSystem === 'diesel') {
            const dieselLitersUsed = existingEnergyUse / 7.0;
            existingCost = dieselLitersUsed * rateVal;
            existingEnergyLabel = dieselLitersUsed.toFixed(1) + ' L';
        } else if (existingSystem === 'lpg') {
            const lpgKgUsed = existingEnergyUse / 9.75;
            existingCost = lpgKgUsed * rateVal;
            existingEnergyLabel = lpgKgUsed.toFixed(1) + ' kg';
        } else if (existingSystem === 'firewood') {
            const woodKgUsed = existingEnergyUse / 2.25;
            existingCost = woodKgUsed * rateVal;
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
        
        const formatK = (val) => (val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val);
        document.getElementById('table-existing-annual').textContent = '₹' + formatK(Math.round(existingCost * 365));
        document.getElementById('table-hp-annual').textContent = '₹' + formatK(Math.round(dailyHPCost * 365));

        document.getElementById('output-annual-savings').textContent = '₹' + Math.round(annualSavings).toLocaleString('en-IN') + ' / Yr';
        document.getElementById('output-payback').textContent = 'Payback: ' + paybackPeriod + ' Years';
        document.getElementById('output-system-cost-info').textContent = '*(Payback based on auto-calculated Heat Pump system cost: ₹' + Math.round(sysCostInput).toLocaleString('en-IN') + ')';
    }

    // Attach Event Listeners to Heat Pump Calculator Controls
    if (calcApp) {
        calcApp.addEventListener('change', () => {
            const app = calcApp.value;
            const users = parseInt(calcUsers.value) || 0;
            if (users > 0 && app) {
                const litersPerPerson = appMultipliers[app] || 30;
                calcLiters.value = users * litersPerPerson;
            }
            recalculateHeatPump();
        });
    }

    if (calcUsers) {
        calcUsers.addEventListener('input', () => {
            const app = calcApp.value;
            const users = parseInt(calcUsers.value) || 0;
            if (users > 0 && app) {
                const litersPerPerson = appMultipliers[app] || 30;
                calcLiters.value = users * litersPerPerson;
            }
            recalculateHeatPump();
        });
    }

    if (calcLiters) {
        calcLiters.addEventListener('input', recalculateHeatPump);
    }

    if (calcExisting) {
        calcExisting.addEventListener('change', () => {
            const sys = calcExisting.value;
            if (!sys) return;
            calcRateLabel.textContent = fuelLabels[sys];
            if (sys === 'electric' && calcState.value) {
                calcRate.value = stateElectricityRates[calcState.value];
            } else {
                calcRate.value = fuelDefaultRates[sys];
            }
            recalculateHeatPump();
        });
    }

    if (calcState) {
        calcState.addEventListener('change', () => {
            const state = calcState.value;
            if (state) {
                const rate = stateElectricityRates[state] || 7.0;
                calcRate.value = rate;
                if (calcExisting.value === 'electric' || !calcExisting.value) {
                    calcRateLabel.textContent = 'Electricity Cost (₹/kWh)';
                }
            }
            recalculateHeatPump();
        });
    }

    if (calcRate) {
        calcRate.addEventListener('input', recalculateHeatPump);
    }


    // 5. SOLAR ROOFTOP POWER CALCULATOR ENGINE
    const solarState = document.getElementById('solar-state');
    const solarBill = document.getElementById('solar-bill');
    const solarArea = document.getElementById('solar-area');
    const solarRate = document.getElementById('solar-rate');

    function resetSolarToBlank() {
        solarState.selectedIndex = 0;
        solarBill.value = '';
        solarArea.value = '';
        solarRate.value = '';
        document.getElementById('solar-placeholder-msg').style.display = 'block';
        document.getElementById('solar-outputs-wrapper').style.display = 'none';
    }

    function recalculateSolar() {
        const state = solarState.value;
        const bill = parseFloat(solarBill.value);
        const area = parseFloat(solarArea.value);
        const rate = parseFloat(solarRate.value);

        // Verify if all required fields are filled (non-empty)
        if (!state || isNaN(bill) || isNaN(area) || isNaN(rate) || bill <= 0 || area <= 0 || rate <= 0) {
            document.getElementById('solar-placeholder-msg').style.display = 'block';
            document.getElementById('solar-outputs-wrapper').style.display = 'none';
            return;
        }

        document.getElementById('solar-placeholder-msg').style.display = 'none';
        document.getElementById('solar-outputs-wrapper').style.display = 'block';

        // 1. Calculate energy consumption based on monthly bill & rate
        const monthlyKwh = bill / rate;
        
        // 2. Solar panels in India produce approx 4 kWh per kW capacity per day
        const solarCapacityNeeded = (monthlyKwh / 30) / 4.0; 
        
        // 3. Solar panels require approx 100 sq ft per kW
        const maxCapacityByArea = area / 100;
        
        // Capped by roof area, rounded to nearest 0.5 kW
        let recommendedKw = Math.min(solarCapacityNeeded, maxCapacityByArea);
        recommendedKw = Math.max(0.5, Math.round(recommendedKw * 2) / 2);

        const areaNeeded = Math.round(recommendedKw * 100);
        const monthlyGen = Math.round(recommendedKw * 4 * 30);
        
        // Standard high-quality rooftop solar system cost in India: ~₹65,000 per kW
        const estimatedSolarCost = Math.round(recommendedKw * 65000);
        
        // Annual solar savings (cannot exceed their actual annual bill)
        const annualBillCost = bill * 12;
        const annualSolarGeneration = recommendedKw * 4 * 365;
        const potentialAnnualSavings = annualSolarGeneration * rate;
        const finalAnnualSavings = Math.min(annualBillCost, potentialAnnualSavings);

        const paybackYears = finalAnnualSavings > 0 ? (estimatedSolarCost / finalAnnualSavings).toFixed(1) : 'N/A';

        // Update UI Outputs
        document.getElementById('solar-output-capacity').textContent = recommendedKw + ' kW Solar System';
        document.getElementById('solar-output-area').textContent = 'Required Roof Area: ' + areaNeeded + ' Sq. Ft. (Capped by area input)';
        
        document.getElementById('solar-table-before-power').textContent = Math.round(monthlyKwh) + ' kWh';
        document.getElementById('solar-table-before-bill').textContent = '₹' + Math.round(bill).toLocaleString('en-IN');
        document.getElementById('solar-table-before-annual').textContent = '₹' + Math.round(annualBillCost).toLocaleString('en-IN');

        document.getElementById('solar-output-savings').textContent = '₹' + Math.round(finalAnnualSavings).toLocaleString('en-IN') + ' / Yr';
        document.getElementById('solar-output-payback').textContent = 'Payback: ' + paybackYears + ' Years';
        document.getElementById('solar-output-cost-info').textContent = '*(Payback based on auto-calculated Solar system cost: ₹' + estimatedSolarCost.toLocaleString('en-IN') + ')';
    }

    if (solarState) {
        solarState.addEventListener('change', () => {
            const state = solarState.value;
            if (state) {
                const rate = stateElectricityRates[state] || 7.0;
                solarRate.value = rate;
            }
            recalculateSolar();
        });
    }

    if (solarBill) solarBill.addEventListener('input', recalculateSolar);
    if (solarArea) solarArea.addEventListener('input', recalculateSolar);
    if (solarRate) solarRate.addEventListener('input', recalculateSolar);


    // 6. Scroll Spy Navigation Highlight
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
