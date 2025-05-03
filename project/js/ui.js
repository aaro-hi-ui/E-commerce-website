// Initialize UI elements and interactions
export function initUI() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize overlay click handler
    initOverlayClick();
}

// Initialize mobile navigation
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Initialize overlay click handler
function initOverlayClick() {
    const overlay = document.getElementById('overlay');
    const mobileNav = document.getElementById('mobile-nav');
    
    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}