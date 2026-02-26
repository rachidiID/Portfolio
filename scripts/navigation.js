/**
 * Navigation JavaScript - Hamburger Menu, Theme Toggle & Scroll Effects
 * Portfolio - Rachidi Adébissi IDONIYI
 */

(function () {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const nav = document.querySelector('.hamburger-nav');
    const menuLinks = document.querySelectorAll('.menu-link');
    const html = document.documentElement;

    // ========================================
    // Theme Management
    // ========================================
    const ThemeManager = {
        STORAGE_KEY: 'portfolio-theme',
        LIGHT: 'light',
        DARK: 'dark',

        init() {
            const savedTheme = localStorage.getItem(this.STORAGE_KEY);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme || (prefersDark ? this.DARK : this.LIGHT);
            this.apply(theme);

            if (themeToggle) {
                themeToggle.addEventListener('click', () => this.toggle());
            }

            // Listen for system preference changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(this.STORAGE_KEY)) {
                    this.apply(e.matches ? this.DARK : this.LIGHT);
                }
            });
        },

        apply(theme) {
            html.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);

            if (themeToggle) {
                themeToggle.classList.toggle('active', theme === this.DARK);
            }
        },

        toggle() {
            const current = html.getAttribute('data-theme');
            const next = current === this.DARK ? this.LIGHT : this.DARK;
            this.apply(next);

            // Add a brief animation class
            themeToggle.classList.add('toggling');
            setTimeout(() => themeToggle.classList.remove('toggling'), 300);
        }
    };

    // ========================================
    // Mobile Menu Management
    // ========================================
    const MenuManager = {
        isOpen: false,

        init() {
            if (hamburgerMenu) {
                hamburgerMenu.addEventListener('click', () => this.toggle());
            }
            if (closeMenu) {
                closeMenu.addEventListener('click', () => this.close());
            }
            if (menuOverlay) {
                menuOverlay.addEventListener('click', (e) => {
                    if (e.target === menuOverlay) this.close();
                });
            }

            // Close on menu link click
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    setTimeout(() => this.close(), 150);
                });
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) this.close();
            });

            // Close on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768 && this.isOpen) this.close();
            });
        },

        toggle() {
            this.isOpen ? this.close() : this.open();
        },

        open() {
            this.isOpen = true;
            if (hamburgerMenu) hamburgerMenu.classList.add('active');
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Stagger animate menu links
            menuLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(30px)';
                setTimeout(() => {
                    link.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, 100 + index * 60);
            });
        },

        close() {
            this.isOpen = false;
            if (hamburgerMenu) hamburgerMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';

            menuLinks.forEach(link => {
                link.style.opacity = '';
                link.style.transform = '';
                link.style.transition = '';
            });
        }
    };

    // ========================================
    // Scroll Effects
    // ========================================
    const ScrollEffects = {
        lastScrollY: 0,

        init() {
            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
            this.onScroll(); // Initial check
        },

        onScroll() {
            const scrollY = window.scrollY;

            // Navbar background on scroll
            if (nav) {
                if (scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }

                // Auto-hide on mobile when scrolling down
                if (window.innerWidth <= 768) {
                    if (scrollY > this.lastScrollY && scrollY > 200) {
                        nav.style.transform = 'translateY(-100%)';
                    } else {
                        nav.style.transform = 'translateY(0)';
                    }
                } else {
                    nav.style.transform = '';
                }
            }

            // Scroll progress indicator
            const scrollIndicator = document.getElementById('scroll-indicator');
            if (scrollIndicator) {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
                scrollIndicator.style.width = progress + '%';
            }

            this.lastScrollY = scrollY;
        }
    };

    // ========================================
    // Active Page Detection
    // ========================================
    const ActivePage = {
        init() {
            const currentPath = window.location.pathname;
            const filename = currentPath.split('/').pop() || 'index.html';

            // Desktop links
            document.querySelectorAll('.nav-desktop-links a').forEach(link => {
                const href = link.getAttribute('href');
                const linkFile = href.split('/').pop();
                if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Mobile links
            document.querySelectorAll('.menu-link').forEach(link => {
                const href = link.getAttribute('href');
                const linkFile = href.split('/').pop();
                if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    };

    // ========================================
    // Initialize Everything
    // ========================================
    document.addEventListener('DOMContentLoaded', () => {
        ThemeManager.init();
        MenuManager.init();
        ScrollEffects.init();
        ActivePage.init();
    });
})();
