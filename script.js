document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        if(splashScreen) {
            splashScreen.style.opacity = '0';
            splashScreen.style.visibility = 'hidden';
        }
    }, 800);

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Full Site Language Switcher Logic
    const langBtns = document.querySelectorAll('.main-lang-btn');
    const enElements = document.querySelectorAll('.lang-en');
    const trElements = document.querySelectorAll('.lang-tr');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            btn.classList.add('active');

            const selectedLang = btn.getAttribute('data-site-lang');

            if (selectedLang === 'tr') {
                // Hide EN, Show TR
                enElements.forEach(el => el.classList.add('hide'));
                trElements.forEach(el => el.classList.remove('hide'));
            } else {
                // Hide TR, Show EN
                trElements.forEach(el => el.classList.add('hide'));
                enElements.forEach(el => el.classList.remove('hide'));
            }
        });
    });

    // Auto-detect browser language
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang && userLang.toLowerCase().startsWith('tr')) {
        const trBtn = document.querySelector('.main-lang-btn[data-site-lang="tr"]');
        if (trBtn) trBtn.click();
    }

    // 4. Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') && !hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 5. Gallery Navigation Buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const activeGallery = document.querySelector('.gallery-grid:not(.hide)');
            // Scroll by one image width roughly
            if(activeGallery) activeGallery.scrollBy({ left: window.innerWidth < 600 ? -320 : -470, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            const activeGallery = document.querySelector('.gallery-grid:not(.hide)');
            if(activeGallery) activeGallery.scrollBy({ left: window.innerWidth < 600 ? 320 : 470, behavior: 'smooth' });
        });
    }

    // Update current year in footer
    const yearEl = document.getElementById('year');
    if(yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
