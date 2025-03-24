document.addEventListener('DOMContentLoaded', function() {
    // Get necessary elements
    const payButton = document.getElementById('payButton');
    const backButton = document.getElementById('backButton');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const spayLateRadio = document.getElementById('spaylate');
    const shopeepayRadio = document.getElementById('shopeepay');
    const loanTermRadios = document.querySelectorAll('input[name="loan-term"]');
    let lastSelectedLoanTerm = document.querySelector('input[name="loan-term"]:checked');
    
    // Get sellerLoanStatus from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sellerLoanStatus = urlParams.get('sellerLoanStatus') || 'normal';

    // Create popup for insufficient limit
    function createInsufficientLimitPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        
        const popup = document.createElement('div');
        popup.className = 'insufficient-limit-popup';
        
        const message = document.createElement('div');
        message.className = 'popup-message';
        message.textContent = 'Sorry, your Seller Loan credit limit is insufficient for this checkout. Please consider creating a new order with a lower amount or using an alternative payment method.';
        
        const divider = document.createElement('div');
        divider.className = 'popup-divider';
        
        const buttonArea = document.createElement('div');
        buttonArea.className = 'popup-button-area';
        buttonArea.onclick = () => {
            overlay.remove();
            shopeepayRadio.checked = true;
        };
        
        const okButton = document.createElement('button');
        okButton.className = 'popup-ok-button';
        okButton.textContent = 'OK';
        
        buttonArea.appendChild(okButton);
        popup.appendChild(message);
        popup.appendChild(divider);
        popup.appendChild(buttonArea);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    // Create popup for overdue loan
    function createOverduePopup() {
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        
        const popup = document.createElement('div');
        popup.className = 'insufficient-limit-popup';
        
        const message = document.createElement('div');
        message.className = 'popup-message';
        message.textContent = 'Please repay the outstanding loan to be eligible for future use of the loan product and to avoid any addtional charges';
        
        const divider = document.createElement('div');
        divider.className = 'popup-divider';
        
        const buttonArea = document.createElement('div');
        buttonArea.className = 'popup-button-area';
        buttonArea.onclick = () => {
            overlay.remove();
            shopeepayRadio.checked = true;
        };
        
        const okButton = document.createElement('button');
        okButton.className = 'popup-ok-button';
        okButton.textContent = 'OK';
        
        buttonArea.appendChild(okButton);
        popup.appendChild(message);
        popup.appendChild(divider);
        popup.appendChild(buttonArea);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    // Handle Seller Loan visibility based on status
    if (sellerLoanStatus === 'inactive') {
        // Hide Seller Loan option and select ShopeePay by default
        const sellerLoanOption = spayLateRadio.closest('.payment-option');
        const loanOptions = document.querySelector('.loan-options');
        sellerLoanOption.style.display = 'none';
        loanOptions.style.display = 'none';
        shopeepayRadio.checked = true;
    } else if (sellerLoanStatus === 'limitNotEnough') {
        // Update available balance
        const paymentBalance = spayLateRadio.closest('.payment-option').querySelector('.payment-balance');
        paymentBalance.innerHTML = '(<span>฿250.00</span> <span data-lang="available">Available</span>)';
        paymentBalance.classList.add('insufficient');
        
        // Hide loan options
        const loanOptions = document.querySelector('.loan-options');
        loanOptions.style.display = 'none';
        
        // Disable Seller Loan selection
        spayLateRadio.disabled = true;
        
        // Add click handler for Seller Loan option
        spayLateRadio.closest('.payment-option').addEventListener('click', (e) => {
            e.preventDefault();
            createInsufficientLimitPopup();
        });
        
        // Ensure ShopeePay is selected
        shopeepayRadio.checked = true;
    } else if (sellerLoanStatus === 'overdue') {
        // Update available balance
        const paymentBalance = spayLateRadio.closest('.payment-option').querySelector('.payment-balance');
        paymentBalance.innerHTML = '(<span>฿535.50</span> <span data-lang="overdue">Overdue</span>)';
        paymentBalance.classList.add('insufficient');
        
        // Hide loan options
        const loanOptions = document.querySelector('.loan-options');
        loanOptions.style.display = 'none';
        
        // Disable Seller Loan selection
        spayLateRadio.disabled = true;
        
        // Add click handler for Seller Loan option
        spayLateRadio.closest('.payment-option').addEventListener('click', (e) => {
            e.preventDefault();
            createOverduePopup();
        });
        
        // Ensure ShopeePay is selected
        shopeepayRadio.checked = true;
    }
    
    // Add click event to the back button
    backButton.addEventListener('click', function() {
        // Check if there's a previous page in history
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // If no history, show message (for demo purposes)
            alert('This would navigate back to the previous page');
        }
    });
    
    // Create ShopeePay PIN drawer
    function createPinDrawer() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'shopeepay-overlay';
        
        // Create drawer container
        const drawer = document.createElement('div');
        drawer.className = 'shopeepay-pin-drawer';
        
        // Create drawer header
        const drawerHeader = document.createElement('div');
        drawerHeader.className = 'drawer-header';
        
        const drawerTitle = document.createElement('h2');
        drawerTitle.setAttribute('data-lang', 'enter_pin');
        drawerTitle.textContent = translate('enter_pin'); // 使用translate函数
        
        const closeButton = document.createElement('button');
        closeButton.className = 'close-drawer';
        closeButton.textContent = '×';
        closeButton.addEventListener('click', closePinDrawer);
        
        drawerHeader.appendChild(drawerTitle);
        drawerHeader.appendChild(closeButton);
        
        // Create drawer divider
        const divider = document.createElement('div');
        divider.className = 'drawer-divider';
        
        // Create PIN dots container
        const pinDotsContainer = document.createElement('div');
        pinDotsContainer.className = 'pin-dots-container';
        
        // Create 6 PIN dots
        for (let i = 0; i < 6; i++) {
            const dot = document.createElement('div');
            dot.className = 'pin-dot';
            pinDotsContainer.appendChild(dot);
        }
        
        // Create forgot PIN link
        const forgotPinLink = document.createElement('a');
        forgotPinLink.href = '#';
        forgotPinLink.className = 'forgot-pin-link';
        forgotPinLink.setAttribute('data-lang', 'forgot_pin');
        forgotPinLink.textContent = translate('forgot_pin'); // 使用translate函数
        
        // Create keypad container
        const keypadContainer = document.createElement('div');
        keypadContainer.className = 'keypad-container';
        
        // Create numeric keypad
        const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'backspace'];
        keys.forEach(key => {
            const keyButton = document.createElement('button');
            keyButton.className = 'keypad-button';
            
            if (key === 'backspace') {
                keyButton.className += ' delete-key';
                // Create backspace icon div instead of text
                const backspaceIcon = document.createElement('div');
                backspaceIcon.className = 'backspace-icon';
                keyButton.appendChild(backspaceIcon);
                keyButton.dataset.key = '⌫'; // Keep the internal key value the same
            } else if (key === '') {
                keyButton.className += ' empty-key';
                keyButton.disabled = true;
            } else {
                keyButton.textContent = key;
                keyButton.dataset.key = key;
            }
            
            if (key !== '') {
                keyButton.addEventListener('click', function() {
                    handleKeyPress(keyButton.dataset.key);
                });
            }
            
            keypadContainer.appendChild(keyButton);
        });
        
        // Create security keyboard label
        const securityLabel = document.createElement('div');
        securityLabel.className = 'security-label';
        securityLabel.setAttribute('data-lang', 'security_keyboard');
        securityLabel.textContent = translate('security_keyboard'); // 使用translate函数
        
        // Create keypad section that includes keypad and security label
        const keypadSection = document.createElement('div');
        keypadSection.className = 'keypad-section';
        keypadSection.appendChild(keypadContainer);
        keypadSection.appendChild(securityLabel);
        
        // Append all elements to drawer
        drawer.appendChild(drawerHeader);
        drawer.appendChild(divider);
        drawer.appendChild(pinDotsContainer);
        drawer.appendChild(forgotPinLink);
        drawer.appendChild(keypadSection);
        
        // Append overlay and drawer to body
        document.body.appendChild(overlay);
        document.body.appendChild(drawer);
        
        // 应用当前语言设置
        if (typeof setLanguage === 'function') {
            setLanguage();
        }
        
        return { overlay, drawer };
    }
    
    // Pin entry variables
    let currentPin = '';
    let dots = [];
    
    // Handle keypad key press
    function handleKeyPress(key) {
        if (key === '⌫') {
            // Delete last digit
            if (currentPin.length > 0) {
                currentPin = currentPin.slice(0, -1);
                updatePinDots();
            }
        } else {
            // Add digit if not at max length
            if (currentPin.length < 6) {
                currentPin += key;
                updatePinDots();
                
                // If PIN complete, verify it
                if (currentPin.length === 6) {
                    setTimeout(() => {
                        verifyPIN();
                    }, 300);
                }
            }
        }
    }
    
    // Update the visual PIN dots
    function updatePinDots() {
        dots = document.querySelectorAll('.pin-dot');
        for (let i = 0; i < dots.length; i++) {
            if (i < currentPin.length) {
                dots[i].classList.add('active');
            } else {
                dots[i].classList.remove('active');
            }
        }
    }
    
    // Show loading animation
    function showLoadingAnimation() {
        const overlay = document.querySelector('.shopeepay-overlay');
        const drawer = document.querySelector('.shopeepay-pin-drawer');
        
        if (overlay && drawer) {
            // 创建加载叠加层
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            
            // 创建加载点容器
            const loadingDots = document.createElement('div');
            loadingDots.className = 'loading-dots';
            
            // 创建3个加载点
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dot.className = 'loading-dot';
                loadingDots.appendChild(dot);
            }
            
            // 将加载点添加到加载覆盖层
            loadingOverlay.appendChild(loadingDots);
            
            // 添加到文档
            document.body.appendChild(loadingOverlay);
            
            // 确保加载动画在抽屉上方可见
            if (drawer) {
                drawer.style.opacity = '0.6'; // 使抽屉半透明
            }
        }
    }
    
    // Close PIN drawer
    function closePinDrawer() {
        const overlay = document.querySelector('.shopeepay-overlay');
        const drawer = document.querySelector('.shopeepay-pin-drawer');
        
        if (overlay && drawer) {
            // Add closing animation class
            drawer.classList.add('closing');
            overlay.classList.add('closing');
            
            // Reset PIN variables
            currentPin = '';
            
            // Remove elements after animation completes
            setTimeout(() => {
                if (drawer.parentNode) {
                    drawer.parentNode.removeChild(drawer);
                }
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    }
    
    // Add event listeners for payment method changes
    if (paymentOptions) {
        paymentOptions.forEach(option => {
            option.addEventListener('change', handlePaymentMethodChange);
        });
    }
    
    // Handle payment method change
    function handlePaymentMethodChange(e) {
        const selectedPayment = e.target.value;
        const loanOptions = document.querySelector('.loan-options');
        
        if (selectedPayment === 'spaylate') {
            // Show loan options when Seller Loan is selected
            if (loanOptions) {
                loanOptions.style.display = 'block';
                
                // Restore last selected loan term or use default
                if (lastSelectedLoanTerm) {
                    lastSelectedLoanTerm.checked = true;
                } else {
                    // Default to first option
                    const firstOption = document.querySelector('input[name="loan-term"]');
                    if (firstOption) firstOption.checked = true;
                }
            }
        } else {
            // Hide loan options for other payment methods
            if (loanOptions) {
                loanOptions.style.display = 'none';
            }
        }
    }
    
    // Store selected loan term
    if (loanTermRadios) {
        loanTermRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                lastSelectedLoanTerm = this;
            });
        });
    }
    
    // Mock PIN verification function
    function verifyPIN() {
        showLoadingAnimation();
        
        // Simulate server verification delay
        setTimeout(() => {
            closePinDrawer();
            
            // Simulate server response delay for redirect
            setTimeout(() => {
                const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
                const selectedLoanTerm = document.querySelector('input[name="loan-term"]:checked')?.value;
                const totalPayment = 300.00;
                
                // Get URL parameters
                const urlParams = new URLSearchParams(window.location.search);
                const appliedTime = urlParams.get('appliedTime');
                const WLStatus = urlParams.get('WLStatus') || '1';
                
                // Build params for redirect
                const params = new URLSearchParams({
                    paymentMethod: selectedPayment,
                    totalPayment: totalPayment,
                    appliedTime: appliedTime,
                    WLStatus: WLStatus
                });
                
                if (selectedLoanTerm) {
                    params.append('loanTerm', selectedLoanTerm);
                }
                
                // Redirect to payment result page
                window.location.href = `paymentResult.html?${params.toString()}`;
            }, 500);
        }, 1500);
    }
    
    // Expose createPinDrawer globally so it can be called from inline scripts
    window.createPinDrawer = createPinDrawer;
}); 