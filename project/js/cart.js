import { formatPrice, addToast } from './utils.js';
import { getProductById } from './products.js';

// Cart state
let cart = [];
let cartOpened = false;

// Initialize cart functionality
export function initCart() {
    // Load cart from local storage
    loadCart();
    
    // Initialize cart sidebar
    initCartSidebar();
    
    // Update cart count
    updateCartCount();
    
    // Initialize cart event listeners
    initCartEvents();
}

// Load cart from local storage
function loadCart() {
    const savedCart = localStorage.getItem('aventramart-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart from localStorage:', e);
            cart = [];
        }
    }
}

// Save cart to local storage
function saveCart() {
    localStorage.setItem('aventramart-cart', JSON.stringify(cart));
}

// Initialize cart sidebar
function initCartSidebar() {
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');
    
    // Open cart
    cartBtn.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCart();
        cartOpened = true;
    });
    
    // Close cart
    closeCartBtn.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        cartOpened = false;
    });
    
    // Close cart when clicking on overlay
    overlay.addEventListener('click', function() {
        if (cartOpened) {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            cartOpened = false;
        }
    });
}

// Initialize cart event listeners
function initCartEvents() {
    // Handle cart item quantity changes and removals
    document.addEventListener('click', function(e) {
        // Increase quantity
        if (e.target.closest('.increase-qty')) {
            const itemId = e.target.closest('.cart-item').getAttribute('data-id');
            updateItemQuantity(itemId, 1);
        }
        
        // Decrease quantity
        if (e.target.closest('.decrease-qty')) {
            const itemId = e.target.closest('.cart-item').getAttribute('data-id');
            updateItemQuantity(itemId, -1);
        }
        
        // Remove item
        if (e.target.closest('.remove-item-btn')) {
            const itemId = e.target.closest('.cart-item').getAttribute('data-id');
            removeFromCart(itemId);
        }
    });
}

// Add item to cart
export function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            quantity: quantity
        });
    }
    
    // Save cart to local storage
    saveCart();
    
    // Update cart UI
    updateCartCount();
    
    // Render cart if cart sidebar is open
    if (cartOpened) {
        renderCart();
    }
}

// Update item quantity
function updateItemQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity is 0 or less
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
        
        // Save cart to local storage
        saveCart();
        
        // Update cart UI
        updateCartCount();
        renderCart();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    
    // Save cart to local storage
    saveCart();
    
    // Update cart UI
    updateCartCount();
    renderCart();
    
    // Show toast
    const product = getProductById(id);
    if (product) {
        addToast(`${product.name} has been removed from your cart.`);
    }
}

// Update cart count in header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCount.textContent = totalItems;
    
    // Show/hide cart count badge
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        // Empty cart
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
                <a href="pages/products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        
        cartFooter.style.display = 'none';
    } else {
        // Render cart items
        let cartItemsHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const product = getProductById(item.id);
            if (!product) return;
            
            const itemPrice = product.discount > 0 
                ? product.price * (1 - product.discount / 100)
                : product.price;
                
            const itemTotal = itemPrice * item.quantity;
            subtotal += itemTotal;
            
            cartItemsHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-item-content">
                        <h3 class="cart-item-title">${product.name}</h3>
                        <p class="cart-item-variant">${product.brand}</p>
                        <div class="cart-item-price">${formatPrice(itemPrice)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease-qty">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" readonly>
                            <button class="quantity-btn increase-qty">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </div>
                        <button class="remove-item-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = cartItemsHTML;
        
        // Calculate shipping
        const shipping = subtotal >= 50 ? 0 : 5.99;
        
        // Update cart summary
        document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
        document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
        document.getElementById('cart-total').textContent = formatPrice(subtotal + shipping);
        
        cartFooter.style.display = 'block';
    }
}

// Get cart items
export function getCartItems() {
    return cart;
}

// Get cart total
export function getCartTotal() {
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = getProductById(item.id);
        if (!product) return;
        
        const itemPrice = product.discount > 0 
            ? product.price * (1 - product.discount / 100)
            : product.price;
            
        subtotal += itemPrice * item.quantity;
    });
    
    return subtotal;
}

// Clear cart
export function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    
    if (cartOpened) {
        renderCart();
    }
}