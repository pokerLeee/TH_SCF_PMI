// Function to handle page transition
function navigateWithTransition(url) {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);

    // Wait for the next frame to ensure the overlay is rendered
    requestAnimationFrame(() => {
        // Force a reflow
        overlay.offsetHeight;
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set up language toggle button
    const languageToggle = document.getElementById('language-toggle');
    const currentLangSpan = document.querySelector('.current-lang');
    
    if (languageToggle) {
        // 初始化设置当前语言显示
        currentLangSpan.textContent = getCurrentLanguage() === 'en' ? 'EN' : 'TH';
        
        languageToggle.addEventListener('click', () => {
            // 使用内联的toggleLanguage函数切换语言
            toggleLanguage();
            
            // 更新按钮上的语言显示
            currentLangSpan.textContent = getCurrentLanguage() === 'en' ? 'EN' : 'TH';
        });
    }

    // Define the status flow sequence
    const statusFlow = [
        {
            status: 'waiting_confirmation_status',
            class: 'waiting-status',
            actions: 'waiting-actions'
        },
        {
            status: 'preparing_order_status',
            class: 'preparing-status',
            actions: 'preparing-actions'
        },
        {
            status: 'shipping_status',
            class: 'shipping-status',
            actions: 'shipping-actions'
        },
        {
            status: 'waiting_acception_status',
            class: 'return-status',
            actions: 'return-actions'
        }
    ];

    // Get the current order status from localStorage or use default
    let currentStatus = localStorage.getItem('ruammitrDemoOrderStatus') || 'waiting_confirmation_status';
    let currentStatusClass = localStorage.getItem('ruammitrDemoOrderStatusClass') || 'waiting-status';
    
    // Update the order status display
    const orderStatus = document.querySelector('.order-status');
    if (orderStatus) {
        // Remove all status-specific classes
        orderStatus.classList.remove('return-status', 'waiting-status', 'preparing-status', 'shipping-status', 'successful-status');
        
        // Add the selected status class
        if (currentStatusClass) {
            orderStatus.classList.add(currentStatusClass);
        }
        
        // Update the status text
        orderStatus.setAttribute('data-lang', currentStatus);
        orderStatus.textContent = translate(currentStatus);

        // Add click handler for status cycling
        orderStatus.addEventListener('click', () => {
            // Find current status index
            const currentIndex = statusFlow.findIndex(s => s.status === currentStatus);
            
            // If current status is not found or is the last status (waiting_acception_status), do nothing
            if (currentIndex === -1 || currentStatus === 'waiting_acception_status') {
                return;
            }

            // Get next status
            const nextStatus = statusFlow[currentIndex + 1];
            
            // Update status
            currentStatus = nextStatus.status;
            currentStatusClass = nextStatus.class;
            
            // Update localStorage
            localStorage.setItem('ruammitrDemoOrderStatus', currentStatus);
            localStorage.setItem('ruammitrDemoOrderStatusClass', currentStatusClass);
            
            // Update UI
            orderStatus.classList.remove('return-status', 'waiting-status', 'preparing-status', 'shipping-status', 'successful-status');
            orderStatus.classList.add(currentStatusClass);
            orderStatus.setAttribute('data-lang', currentStatus);
            orderStatus.textContent = translate(currentStatus);

            // Update action buttons visibility
            ['waiting-actions', 'preparing-actions', 'shipping-actions', 'return-actions', 'successful-actions'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.style.display = id === nextStatus.actions ? 'block' : 'none';
                }
            });
        });
    }
    
    // Get all action divs
    const normalCheckout = document.getElementById('normal-checkout');
    const returnActions = document.getElementById('return-actions');
    const waitingActions = document.getElementById('waiting-actions');
    const preparingActions = document.getElementById('preparing-actions');
    const shippingActions = document.getElementById('shipping-actions');
    const successfulActions = document.getElementById('successful-actions');
    
    // Hide all action divs first
    [normalCheckout, returnActions, waitingActions, preparingActions, shippingActions, successfulActions].forEach(div => {
        if (div) div.style.display = 'none';
    });
    
    // Show the appropriate action div based on status
    if (currentStatus) {
        switch (currentStatus) {
            case 'waiting_acception_status':   
                if (returnActions) returnActions.style.display = 'block';
                break;
            case 'waiting_confirmation_status':
                if (waitingActions) waitingActions.style.display = 'block';
                break;
            case 'preparing_order_status':
                if (preparingActions) preparingActions.style.display = 'block';
                break;
            case 'shipping_status':
                if (shippingActions) shippingActions.style.display = 'block';
                break;
            case 'order_successful_status':
                if (successfulActions) successfulActions.style.display = 'block';
                break;
            default:
                if (normalCheckout) normalCheckout.style.display = 'block';
        }
    }

    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real app, this would navigate back
            // For demo purposes, we'll just show an alert
            alert(translate('back_alert'));
        });
    }

    // Coupon button functionality
    const couponButton = document.querySelector('.discount-badge .button-light');
    if (couponButton) {
        couponButton.addEventListener('click', () => {
            alert(translate('coupon_applied'));
        });
    }

    // Coupon details buttons
    const couponDetailsButtons = document.querySelectorAll('.coupon-info .button-light');
    couponDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(translate('coupon_details'));
        });
    });

    // Checkout button functionality
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert(translate('order_placed'));
        });
    }

    // Receipt confirmation button
    const confirmButton = document.querySelector('.confirm-button');
    if (confirmButton) {
        confirmButton.addEventListener('click', () => {
            // In a real app, this would update the order status
            if (orderStatus) {
                // Update localStorage with new status
                localStorage.setItem('ruammitrDemoOrderStatus', 'order_successful_status');
                localStorage.setItem('ruammitrDemoOrderStatusClass', 'successful-status');
                
                // Update UI
                orderStatus.setAttribute('data-lang', 'order_successful_status');
                orderStatus.textContent = translate('order_successful_status');
                orderStatus.classList.remove('return-status');
                orderStatus.classList.add('successful-status');
            }
            
            // Hide return actions and show successful actions
            if (returnActions) returnActions.style.display = 'none';
            if (successfulActions) successfulActions.style.display = 'block';

            // Get current date and time for the URL parameters
            const now = new Date();
            const formattedDate = now.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).replace(/\//g, '-');
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            });

            // Get URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const sellerLoanStatus = urlParams.get('sellerLoanStatus') || 'normal';
            const WLStatus = urlParams.get('WLStatus') || '1';

            // Build the URL with parameters
            const params = new URLSearchParams({
                appliedTime: `${formattedDate}, ${formattedTime}`,
                sellerLoanStatus: sellerLoanStatus,
                WLStatus: WLStatus
            });

            // Use the transition function to navigate
            navigateWithTransition(`applicationResult.html?${params.toString()}`);
        });
    }

    // Receipt rejection button
    const rejectButton = document.querySelector('.reject-button');
    if (rejectButton) {
        rejectButton.addEventListener('click', () => {
            alert(translate('reject_receipt_alert'));
            
            // In a real app, this would update the order status
            // For now, we'll just show the normal checkout button
            if (returnActions) returnActions.style.display = 'none';
            if (normalCheckout) normalCheckout.style.display = 'block';
        });
    }

    // Cancel order button
    const cancelButton = document.querySelector('.cancel-button');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            alert(translate('cancel_order_alert'));
            
            // In a real app, this would update the order status
            // For now, we'll just show the normal checkout button
            if (waitingActions) waitingActions.style.display = 'none';
            if (normalCheckout) normalCheckout.style.display = 'block';
        });
    }

    // Reorder button for successful orders
    const reorderButton = document.querySelector('.reorder-button');
    if (reorderButton) {
        reorderButton.addEventListener('click', () => {
            // Do nothing when clicked
        });
    }

    // Function to update total price (for a real app)
    function updateTotalPrice() {
        // This would calculate the total price based on products and discounts
        // For this demo, we're using static values
        console.log('Total price updated');
    }
}); 