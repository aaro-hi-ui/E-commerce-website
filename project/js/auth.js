import { addToast } from './utils.js';

// User state
let currentUser = null;
let accountOpened = false;

// Initialize authentication functionality
export function initAuth() {
    // Load user from local storage
    loadUser();
    
    // Initialize account sidebar
    initAccountSidebar();
    
    // Initialize auth forms
    initAuthForms();
}

// Load user from local storage
function loadUser() {
    const savedUser = localStorage.getItem('aventramart-user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
        } catch (e) {
            console.error('Error loading user from localStorage:', e);
            currentUser = null;
        }
    }
}

// Save user to local storage
function saveUser(user) {
    localStorage.setItem('aventramart-user', JSON.stringify(user));
    currentUser = user;
}

// Initialize account sidebar
function initAccountSidebar() {
    const accountBtn = document.getElementById('account-btn');
    const accountSidebar = document.getElementById('account-sidebar');
    const closeAccountBtn = document.getElementById('close-account');
    const overlay = document.getElementById('overlay');
    
    // Update account content based on login status
    updateAccountUI();
    
    // Open account sidebar
    accountBtn.addEventListener('click', function() {
        accountSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        accountOpened = true;
    });
    
    // Close account sidebar
    closeAccountBtn.addEventListener('click', function() {
        accountSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        accountOpened = false;
    });
    
    // Close account when clicking on overlay
    overlay.addEventListener('click', function() {
        if (accountOpened) {
            accountSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            accountOpened = false;
        }
    });
}

// Initialize authentication forms
function initAuthForms() {
    // Show login form
    const showLoginBtn = document.getElementById('show-login');
    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', function() {
            document.getElementById('account-register-form').style.display = 'none';
            document.getElementById('account-login-form').style.display = 'block';
        });
    }
    
    // Show register form
    const showRegisterBtn = document.getElementById('show-register');
    if (showRegisterBtn) {
        showRegisterBtn.addEventListener('click', function() {
            document.getElementById('account-login-form').style.display = 'none';
            document.getElementById('account-register-form').style.display = 'block';
        });
    }
    
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Basic validation
            if (!email || !password) {
                addToast('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate login (in a real app, this would be an API call)
            login(email, password);
        });
    }
    
    // Register form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            
            // Basic validation
            if (!name || !email || !password || !confirmPassword) {
                addToast('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                addToast('Passwords do not match', 'error');
                return;
            }
            
            // Simulate registration (in a real app, this would be an API call)
            register(name, email, password);
        });
    }
}

// Login user
function login(email, password) {
    // Simulate API call
    setTimeout(() => {
        // In a real app, this would verify credentials with a server
        // For demo, we'll just create a user object
        const user = {
            id: Date.now().toString(),
            name: email.split('@')[0],
            email: email,
            isLoggedIn: true
        };
        
        // Save user to local storage
        saveUser(user);
        
        // Update UI
        updateAccountUI();
        
        // Close sidebar
        document.getElementById('account-sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
        accountOpened = false;
        
        // Show success message
        addToast('You have successfully logged in!');
    }, 1000);
}

// Register user
function register(name, email, password) {
    // Simulate API call
    setTimeout(() => {
        // In a real app, this would create a user on the server
        // For demo, we'll just create a user object
        const user = {
            id: Date.now().toString(),
            name: name,
            email: email,
            isLoggedIn: true
        };
        
        // Save user to local storage
        saveUser(user);
        
        // Update UI
        updateAccountUI();
        
        // Close sidebar
        document.getElementById('account-sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
        accountOpened = false;
        
        // Show success message
        addToast('Your account has been created successfully!');
    }, 1000);
}

// Logout user
function logout() {
    // Clear user from local storage
    localStorage.removeItem('aventramart-user');
    currentUser = null;
    
    // Update UI
    updateAccountUI();
    
    // Show success message
    addToast('You have been logged out successfully!');
}

// Update account UI based on login status
function updateAccountUI() {
    const accountContent = document.getElementById('account-content');
    if (!accountContent) return;
    
    if (currentUser && currentUser.isLoggedIn) {
        // User is logged in, show account info
        accountContent.innerHTML = `
            <div class="account-info">
                <div class="account-avatar">
                    <div class="avatar-placeholder">
                        ${currentUser.name.charAt(0).toUpperCase()}
                    </div>
                </div>
                <h3>Hello, ${currentUser.name}!</h3>
                <p>${currentUser.email}</p>
                
                <div class="account-actions">
                    <a href="pages/account.html" class="btn btn-outline btn-full">
                        Manage Account
                    </a>
                    <a href="pages/orders.html" class="btn btn-outline btn-full">
                        Order History
                    </a>
                    <button id="logout-btn" class="btn btn-outline btn-full">
                        Sign Out
                    </button>
                </div>
            </div>
        `;
        
        // Add logout handler
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }
    } else {
        // User is not logged in, show login/register forms
        document.getElementById('account-login-form').style.display = 'block';
        document.getElementById('account-register-form').style.display = 'none';
    }
}

// Get current user
export function getCurrentUser() {
    return currentUser;
}

// Check if user is logged in
export function isLoggedIn() {
    return currentUser && currentUser.isLoggedIn;
}