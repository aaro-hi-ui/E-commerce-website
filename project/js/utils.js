// Format price
export function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Add toast notification
export function addToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastContent = document.getElementById('toast-content');
    
    toastContent.innerHTML = message;
    toast.className = `toast ${type}`;
    toast.classList.add('active');
    
    // Auto-close toast after 3 seconds
    setTimeout(closeToast, 3000);
}

// Close toast notification
export function closeToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('active');
}