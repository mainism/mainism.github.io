// ============================================================================
// LOGIC SCRIPT
// This takes the information from data.js and places it into index.html
// You do NOT need to edit this file.
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. POPULATE HERO & PERSONAL INFO ---
    document.title = `${portfolioData.personal.name} | Portfolio`;
    document.getElementById('nav-initials').textContent = portfolioData.personal.name.split(' ').map(n => n[0]).join('');
    
    document.getElementById('hero-name').textContent = portfolioData.personal.name;
    document.getElementById('hero-title').textContent = portfolioData.personal.title;
    document.getElementById('hero-bio').textContent = portfolioData.personal.bio;

    const heroLinks = document.getElementById('hero-links');
    if (portfolioData.personal.linkedin) {
        heroLinks.innerHTML += `<a href="${portfolioData.personal.linkedin}" target="_blank" class="btn btn-primary">LinkedIn</a>`;
    }
    if (portfolioData.personal.github) {
        heroLinks.innerHTML += `<a href="${portfolioData.personal.github}" target="_blank" class="btn btn-outline">GitHub</a>`;
    }

    const footerContact = document.getElementById('footer-contact');
    footerContact.classList.add('footer-contact');
    footerContact.innerHTML = `
        <a href="mailto:${portfolioData.personal.email}">${portfolioData.personal.email}</a>
        <span>•</span>
        <span>${portfolioData.personal.phone}</span>
        <span>•</span>
        <span>${portfolioData.personal.location}</span>
    `;
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- 2. POPULATE EDUCATION ---
    const eduContainer = document.getElementById('education-container');
    let eduHTML = '';
    portfolioData.education.forEach(item => {
        let courses = item.coursework ? `<div class="pill-container">${item.coursework.map(c => `<span class="pill">${c}</span>`).join('')}</div>` : '';
        eduHTML += `
            <div class="timeline-item">
                <span class="timeline-date">${item.period}</span>
                <h3 class="timeline-title">${item.degree}</h3>
                <h4 class="timeline-subtitle">${item.institution}</h4>
                <p>${item.details}</p>
                ${courses}
            </div>
        `;
    });
    eduContainer.innerHTML = eduHTML;

    // --- 3. POPULATE SKILLS ---
    const skillsContainer = document.getElementById('skills-container');
    let skillsHTML = '';
    const skillCategories = [
        { key: 'software', name: 'Software & Tools' },
        { key: 'technical', name: 'Technical Skills' },
        { key: 'soft', name: 'Soft Skills' }
    ];
    skillCategories.forEach(cat => {
        if (portfolioData.skills[cat.key] && portfolioData.skills[cat.key].length > 0) {
            skillsHTML += `
                <div class="skill-category">
                    <h3 class="skill-category-title">${cat.name}</h3>
                    <ul class="skill-list">
                        ${portfolioData.skills[cat.key].map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });
    skillsContainer.innerHTML = skillsHTML;

    // --- 4. POPULATE EXPERIENCE ---
    const expContainer = document.getElementById('experience-container');
    let expHTML = '';
    portfolioData.experience.forEach(item => {
        expHTML += `
            <div class="timeline-item">
                <span class="timeline-date">${item.period}</span>
                <h3 class="timeline-title">${item.role}</h3>
                <h4 class="timeline-subtitle">${item.company}</h4>
                <p>${item.description}</p>
            </div>
        `;
    });
    expContainer.innerHTML = expHTML;

    // --- 5. POPULATE PROJECTS ---
    const projContainer = document.getElementById('projects-container');
    let projHTML = '';
    portfolioData.projects.forEach(item => {
        let tools = item.tools ? `<div class="pill-container" style="margin-bottom: 1rem;">${item.tools.map(t => `<span class="pill">${t}</span>`).join('')}</div>` : '';
        let link = item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" class="card-link">View Project</a>` : '';
        projHTML += `
            <div class="card">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">${item.date}</div>
                <p class="card-desc">${item.description}</p>
                ${tools}
                ${link}
            </div>
        `;
    });
    projContainer.innerHTML = projHTML;

    // --- 6. POPULATE RESEARCH ---
    const researchContainer = document.getElementById('research-container');
    let researchHTML = '';
    portfolioData.papers.forEach(item => {
        let link = item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" class="card-link">Read Paper</a>` : '';
        researchHTML += `
            <div class="card" style="border-left: 4px solid var(--accent-color);">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">${item.conference} | ${item.date}</div>
                <p class="card-desc">${item.description}</p>
                ${link}
            </div>
        `;
    });
    researchContainer.innerHTML = researchHTML;

    // --- 7. POPULATE ECA ---
    const ecaContainer = document.getElementById('eca-container');
    let ecaHTML = '';
    portfolioData.eca.forEach(item => {
        ecaHTML += `
            <div class="timeline-item">
                <span class="timeline-date">${item.period}</span>
                <h3 class="timeline-title">${item.role}</h3>
                <h4 class="timeline-subtitle">${item.organization}</h4>
                <p>${item.description}</p>
            </div>
        `;
    });
    ecaContainer.innerHTML = ecaHTML;

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    const sunIcon = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('svg').innerHTML = sunIcon;
    }

    themeToggle.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        themeToggle.querySelector('svg').innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    });

    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up').forEach(el => {
        observer.observe(el);
    });
});
