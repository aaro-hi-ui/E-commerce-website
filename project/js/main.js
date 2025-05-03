// Import modules
import { initProducts } from './products.js';
import { initCart } from './cart.js';
import { initAuth } from './auth.js';
import { initUI } from './ui.js';
import { addToast, closeToast } from './utils.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initProducts();
    initCart();
    initAuth();
    initUI();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize toast functionality
    document.getElementById('close-toast').addEventListener('click', closeToast);
    
    // Welcome toast
    setTimeout(() => {
        addToast('Welcome to Aventramart! Get 20% off your first order with code: WELCOME20');
    }, 2000);
});

// Initialize back to top button
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}