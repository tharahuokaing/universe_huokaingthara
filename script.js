document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const htmlElement = document.documentElement;

    // State management
    let currentLang = 'km'; // Default language set to Khmer

    // 1. Theme Toggle Logic
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
    });

    // 2. Language Toggle Logic (Khmer <-> English)
    function switchLanguage(lang) {
        currentLang = lang;

        // Toggle visibility of blocks inside article
        const kmBlock = document.querySelector('.content-block.km-content');
        const enBlock = document.querySelector('.content-block.en-content');

        if (lang === 'km') {
            kmBlock.classList.add('active');
            enBlock.classList.remove('active');
        } else {
            enBlock.classList.add('active');
            kmBlock.classList.remove('active');
        }

        // Toggle elements matching language classes (.km and .en) globally
        document.querySelectorAll('.km').forEach(el => {
            el.style.display = (lang === 'km') ? (el.tagName === 'A' ? 'inline' : 'block') : 'none';
        });

        document.querySelectorAll('.en').forEach(el => {
            el.style.display = (lang === 'en') ? (el.tagName === 'A' ? 'inline' : 'block') : 'none';
        });

        // Update active class on nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.classList.contains(lang)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Event listener for language toggle button
    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'km' ? 'en' : 'km';
        switchLanguage(nextLang);
    });

    // Initialize initial state on load
    switchLanguage('km');
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".language-section");
    
    // Simple fade-in entrance animation on load
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Dynamic dynamic greeting or console log verification
    console.log("UNIVERSE HUOKAING THARA - System Initialized Successfully.");
});

// Advanced Interactive Modules for UNIVERSE HUOKAING THARA
(function() {
    'use strict';

    // 1. Dynamic Notification Toast Creator
    function showNotification(message) {
        const toast = document.createElement('div');
        toast.className = 'uh-toast';
        toast.innerText = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('uh-toast-show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('uh-toast-show');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // 2. Click-to-Copy Brand Tag Feature
    const brandTitles = document.querySelectorAll('.brand-title');
    brandTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.title = 'Click to copy brand name';
        title.addEventListener('click', () => {
            navigator.clipboard.writeText(title.innerText).then(() => {
                showNotification('Copied brand name: ' + title.innerText);
            });
        });
    });

    // 3. Scroll Progress Indicator Bar
    const progressBar = document.createElement('div');
    progressBar.className = 'uh-scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    });

})();

// Interactive Particle Background Generator and Modal Manager
(function() {
    'use strict';

    // 1. Interactive Ripple Effect on Click
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'uh-click-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });

    // 2. Dynamic Copyright Year Auto-Updater
    window.addEventListener('DOMContentLoaded', () => {
        const footers = document.querySelectorAll('.footer p');
        footers.forEach(footer => {
            if (footer.innerText.includes('2026')) {
                const currentYear = new Date().getFullYear();
                footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
            }
        });
    });

    // 3. Keyboard Shortcut Handler (Ctrl + Shift + U for Quick Alert)
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
            console.log("UNIVERSE HUOKAING THARA: Shortcuts Menu Triggered.");
        }
    });

})();
