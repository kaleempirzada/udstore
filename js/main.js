/**
 * Orbit Modular Component Loader
 * Fetches HTML partials and injects them into the DOM
 */
const OrbitApp = {
    async init() {
        // Load partials
        await this.loadPartial('header-placeholder', 'partials/header.html');
        await this.loadPartial('menu-placeholder', 'partials/menu.html');
        await this.loadPartial('footer-placeholder', 'partials/footer.html');

        // Post-load initialization
        this.setActiveNav();
        this.initScrollEffect();
    },

    async loadPartial(id, path) {
        const element = document.getElementById(id);
        if (!element) return;

        try {
            const response = await fetch(path);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                console.error(`Failed to load partial: ${path}`);
            }
        } catch (error) {
            console.error(`Error loading partial ${path}:`, error);
        }
    },

    setActiveNav() {
        const path = window.location.pathname;
        const page = path.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('#main-nav a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    initScrollEffect() {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (!nav) return;

            if (window.scrollY > 50) {
                nav.style.padding = '1rem 10%';
                nav.style.background = 'rgba(2, 6, 23, 0.95)';
            } else {
                nav.style.padding = '1.5rem 10%';
                nav.style.background = 'rgba(2, 6, 23, 0.8)';
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => OrbitApp.init());
