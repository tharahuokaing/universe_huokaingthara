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
