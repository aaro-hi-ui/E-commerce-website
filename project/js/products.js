import { mockProducts, mockCategories } from './data.js';
import { addToCart } from './cart.js';
import { formatPrice, addToast } from './utils.js';

// Initialize products functionality
export function initProducts() {
    // Render categories on homepage
    renderCategories();
    
    // Render new arrivals on homepage
    renderNewArrivals();
    
    // Render deals on homepage
    renderDeals();
    
    // Render testimonials on homepage
    renderTestimonials();
    
    // Initialize quick view
    initQuickView();
    
    // Initialize product interactions
    initProductInteractions();
    
    // Initialize newsletter form
    initNewsletterForm();
}

// Render categories on homepage
function renderCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    if (!categoriesContainer) return;
    
    let categoriesHTML = '';
    
    mockCategories.forEach(category => {
        categoriesHTML += `
            <a href="pages/categories.html?category=${category.id}" class="category-card">
                <div class="category-image">
                    <img src="${category.image}" alt="${category.name}">
                </div>
                <div class="category-content">
                    <h3 class="category-title">${category.name}</h3>
                    <div class="category-meta">
                        <span class="category-count">${category.count} Products</span>
                        <span class="category-link">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </div>
                </div>
            </a>
        `;
    });
    
    categoriesContainer.innerHTML = categoriesHTML;
}

// Render new arrivals on homepage
function renderNewArrivals() {
    const newArrivalsContainer = document.getElementById('new-arrivals-container');
    if (!newArrivalsContainer) return;
    
    // Filter out new products
    const newProducts = mockProducts.filter(product => product.isNew).slice(0, 8);
    
    renderProductGrid(newArrivalsContainer, newProducts);
}

// Render deals on homepage
function renderDeals() {
    const dealsContainer = document.getElementById('deals-container');
    if (!dealsContainer) return;
    
    // Filter out products with discounts
    const discountedProducts = mockProducts
        .filter(product => product.discount > 0)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 4);
    
    renderProductGrid(dealsContainer, discountedProducts);
}

// Generic function to render a grid of products
export function renderProductGrid(container, products) {
    let productsHTML = '';
    
    products.forEach(product => {
        productsHTML += `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
                    ${product.isNew ? `<div class="new-badge">NEW</div>` : ''}
                    <button class="favorite-btn" data-product-id="${product.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-content">
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${renderRatingStars(product.rating)}
                        </div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <h3 class="product-title">
                        <a href="pages/product.html?id=${product.id}">${product.name}</a>
                    </h3>
                    <p class="product-brand">${product.brand}</p>
                    <div class="product-price-row">
                        <div class="product-price">
                            ${product.discount > 0 ? 
                                `<span class="current-price">${formatPrice(product.price * (1 - product.discount / 100))}</span>
                                <span class="original-price">${formatPrice(product.price)}</span>` : 
                                `<span class="current-price">${formatPrice(product.price)}</span>`
                            }
                        </div>
                        <button class="add-to-cart-btn" data-product-id="${product.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = productsHTML;
}

// Render testimonials on homepage
function renderTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (!testimonialsContainer) return;
    
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
            rating: 5,
            date: '2 weeks ago',
            text: 'Absolutely love this store! The products are high quality and the shipping was super fast. Customer service was also exceptional when I had a question about my order.',
            product: 'Wireless Headphones'
        },
        {
            id: 2,
            name: 'Michael Chen',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
            rating: 4,
            date: '1 month ago',
            text: 'Great selection of products at competitive prices. I\'ve ordered multiple times and have always had a good experience. Would definitely recommend to friends.',
            product: 'Smart Watch'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
            rating: 5,
            date: '3 weeks ago',
            text: 'The return process was so easy when I needed a different size. And the replacement arrived quickly! This is now my go-to online store for fashion.',
            product: 'Summer Dress'
        }
    ];
    
    let testimonialsHTML = '';
    
    testimonials.forEach(testimonial => {
        testimonialsHTML += `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <div class="testimonial-meta">
                        <h3>${testimonial.name}</h3>
                        <div class="testimonial-rating">
                            <div class="rating-stars">
                                ${renderRatingStars(testimonial.rating)}
                            </div>
                            <span class="testimonial-date">${testimonial.date}</span>
                        </div>
                    </div>
                </div>
                <p class="testimonial-content">${testimonial.text}</p>
                <div class="testimonial-product">
                    Purchased: <span>${testimonial.product}</span>
                </div>
            </div>
        `;
    });
    
    testimonialsContainer.innerHTML = testimonialsHTML;
}

// Helper function to render star ratings
function renderRatingStars(rating) {
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        } else {
            starsHTML += `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        }
    }
    
    return starsHTML;
}

// Initialize product interactions
function initProductInteractions() {
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart-btn')) {
            const button = e.target.closest('.add-to-cart-btn');
            const productId = button.getAttribute('data-product-id');
            const product = mockProducts.find(p => p.id === productId);
            
            if (product) {
                addToCart(product);
                animateCartButton(button);
                addToast(`${product.name} has been added to your cart!`);
            }
        }
    });
    
    // Toggle favorite status
    document.addEventListener('click', function(e) {
        if (e.target.closest('.favorite-btn')) {
            const button = e.target.closest('.favorite-btn');
            button.classList.toggle('active');
            
            const productId = button.getAttribute('data-product-id');
            const product = mockProducts.find(p => p.id === productId);
            
            if (product) {
                if (button.classList.contains('active')) {
                    addToast(`${product.name} has been added to your favorites!`);
                } else {
                    addToast(`${product.name} has been removed from your favorites!`);
                }
            }
        }
    });
    
    // Quick view product
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-card') && !e.target.closest('button') && !e.target.closest('a')) {
            const card = e.target.closest('.product-card');
            const productId = card.getAttribute('data-product-id');
            showQuickView(productId);
        }
    });
}

// Initialize newsletter form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('newsletter-email');
        const messageContainer = document.getElementById('newsletter-message');
        
        if (!emailInput.value) {
            messageContainer.innerHTML = 'Please enter your email address.';
            messageContainer.className = 'newsletter-message error';
            return;
        }
        
        if (!isValidEmail(emailInput.value)) {
            messageContainer.innerHTML = 'Please enter a valid email address.';
            messageContainer.className = 'newsletter-message error';
            return;
        }
        
        // Simulate successful subscription
        newsletterForm.innerHTML = `
            <div class="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank you for subscribing!</h3>
                <p>We've sent a confirmation to your email.</p>
            </div>
        `;
        
        addToast('Thanks for subscribing to our newsletter!');
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Initialize quick view functionality
function initQuickView() {
    const modal = document.getElementById('quick-view-modal');
    const closeButton = document.getElementById('close-quick-view');
    
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Show quick view modal for a product
function showQuickView(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quick-view-modal');
    const title = document.getElementById('quick-view-title');
    const content = document.getElementById('quick-view-content');
    
    title.textContent = product.name;
    
    const discountedPrice = product.discount > 0 
        ? product.price * (1 - product.discount / 100)
        : product.price;
        
    content.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
            </div>
            <div class="quick-view-details">
                <p class="product-brand">${product.brand}</p>
                <div class="product-rating">
                    <div class="rating-stars">
                        ${renderRatingStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${product.discount > 0 ? 
                        `<span class="current-price">${formatPrice(discountedPrice)}</span>
                        <span class="original-price">${formatPrice(product.price)}</span>` : 
                        `<span class="current-price">${formatPrice(product.price)}</span>`
                    }
                </div>
                <p class="product-description">${product.description || 'No description available.'}</p>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-modal" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                    <a href="pages/product.html?id=${product.id}" class="btn btn-outline">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Add click handler for Add to Cart button in modal
    const addToCartButton = content.querySelector('.add-to-cart-modal');
    addToCartButton.addEventListener('click', () => {
        addToCart(product);
        addToast(`${product.name} has been added to your cart!`);
        modal.classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Show modal
    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Animate add to cart button
function animateCartButton(button) {
    button.classList.add('adding');
    
    // Create a success checkmark icon
    const originalHTML = button.innerHTML;
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    `;
    
    // Reset after animation
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('adding');
    }, 1500);
}

// Find product by ID
export function getProductById(id) {
    return mockProducts.find(product => product.id === id);
}