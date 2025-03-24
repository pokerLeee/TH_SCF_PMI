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
        drawerTitle.textContent = 'Enter ShopeePay PIN';
        
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
        forgotPinLink.textContent = 'Forgot ShopeePay PIN?';
        
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
        securityLabel.textContent = 'ShopeePay Security Keyboard';
        
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
        
        // Disable body scroll when drawer is open
        document.body.style.overflow = 'hidden';
    }
    
    // Handle PIN keypress
    function handleKeyPress(key) {
        const pinDots = document.querySelectorAll('.pin-dot');
        const activeDots = document.querySelectorAll('.pin-dot.active');
        
        if (key === '⌫') {
            // Handle delete key
            if (activeDots.length > 0) {
                activeDots[activeDots.length - 1].classList.remove('active');
            }
            return;
        }
        
        // Add active class to next inactive dot
        if (activeDots.length < 6) {
            pinDots[activeDots.length].classList.add('active');
            
            // If all dots are filled, simulate PIN verification
            if (activeDots.length + 1 === 6) {
                // Add a small delay before showing loading animation
                setTimeout(() => {
                    // Check that we still have 6 active dots (user didn't delete any during timeout)
                    const currentActiveDots = document.querySelectorAll('.pin-dot.active');
                    if (currentActiveDots.length === 6) {
                        // Show loading animation without closing the drawer
                        showLoadingAnimation();
                        
                        // Redirect after loading animation (simulating verification)
                        setTimeout(() => {
                            // Now close the drawer and redirect
                            closePinDrawer();
                            verifyPIN();
                        }, 2000); // 2 seconds loading time
                    }
                }, 500);
            }
        }
    }
    
    // Show loading animation
    function showLoadingAnimation() {
        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        
        // Create loading dots container
        const loadingDots = document.createElement('div');
        loadingDots.className = 'loading-dots';
        
        // Create three loading dots
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'loading-dot';
            loadingDots.appendChild(dot);
        }
        
        // Append dots to overlay
        loadingOverlay.appendChild(loadingDots);
        
        // Append overlay to body
        document.body.appendChild(loadingOverlay);
        
        // Ensure the loading animation is visible over the drawer
        const drawer = document.querySelector('.shopeepay-pin-drawer');
        if (drawer) {
            drawer.style.opacity = '0.6'; // Make drawer semi-transparent
        }
    }
    
    // Close PIN drawer
    function closePinDrawer() {
        const overlay = document.querySelector('.shopeepay-overlay');
        const drawer = document.querySelector('.shopeepay-pin-drawer');
        
        if (overlay) {
            overlay.remove();
        }
        if (drawer) {
            drawer.remove();
        }
        
        // Re-enable body scroll
        document.body.style.overflow = '';
    }
    
    // Add click event to the pay button
    payButton.addEventListener('click', function() {
        // Get the selected payment method
        let selectedPayment = '';
        paymentOptions.forEach(option => {
            if (option.checked) {
                selectedPayment = option.value;
            }
        });
        
        // Both ShopeePay and Seller Loan payment methods require PIN verification
        if (selectedPayment === 'shopeepay' || selectedPayment === 'spaylate') {
            // Show ShopeePay PIN drawer
            createPinDrawer();
        } else {
            // For other payment methods, proceed to result page
            const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
            
            // Get selected loan term and total payment amount if using Seller Loan
            let redirectUrl = 'paymentResult.html?paymentMethod=' + selectedPayment;
            
            if (selectedPayment === 'spaylate') {
                const selectedLoanTerm = document.querySelector('input[name="loan-term"]:checked').value;
                const totalPaymentElement = document.querySelector('.total-amount');
                const totalPayment = totalPaymentElement.textContent.replace('฿', '').trim();
                
                redirectUrl += `&loanTerm=${selectedLoanTerm}&totalPayment=${totalPayment}`;
            }
            
            window.location.href = redirectUrl;
        }
    });
    
    // Add change event to the payment options
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Visual feedback when selecting different payment methods
            // In a real app, you might update UI elements based on the selected payment method
            console.log(`Selected payment method: ${this.value}`);
        });
    });

    // Store the last selected loan term when switching between payment methods
    loanTermRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            lastSelectedLoanTerm = radio;
        });
    });

    // Handle payment method changes
    function handlePaymentMethodChange() {
        if (shopeepayRadio.checked) {
            // Uncheck all loan terms when ShopeePay is selected
            loanTermRadios.forEach(radio => {
                radio.checked = false;
            });
            // Update loan card styles
            document.querySelectorAll('.loan-card-content').forEach(card => {
                card.style.opacity = '0.5';
                card.style.pointerEvents = 'none';
            });
        } else if (spayLateRadio.checked) {
            // Restore the last selected loan term or select the default one
            if (lastSelectedLoanTerm && lastSelectedLoanTerm.checked) {
                lastSelectedLoanTerm.checked = true;
            } else {
                const checkedLoanTerm = document.querySelector('input[name="loan-term"]:checked');
                if (checkedLoanTerm) {
                    lastSelectedLoanTerm = checkedLoanTerm;
                } else {
                    document.querySelector('input[name="loan-term"][value="3"]').checked = true;
                    lastSelectedLoanTerm = document.querySelector('input[name="loan-term"][value="3"]');
                }
            }
            // Restore loan card styles
            document.querySelectorAll('.loan-card-content').forEach(card => {
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            });
        }
    }

    spayLateRadio.addEventListener('change', handlePaymentMethodChange);
    shopeepayRadio.addEventListener('change', handlePaymentMethodChange);

    // Initial state setup
    handlePaymentMethodChange();

    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', () => {
            const radioButton = option.querySelector('input[type="radio"]');
            radioButton.checked = true;
            handlePaymentMethodChange();
        });
    });

    loanTermRadios.forEach(radio => {
        radio.addEventListener('click', function() {
            spayLateRadio.checked = true;
            handlePaymentMethodChange();
        });
    });

    function verifyPIN() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
        const selectedLoanTerm = document.querySelector('input[name="loan-term"]:checked')?.value;
        const totalPayment = 300.00;
        const urlParams = new URLSearchParams(window.location.search);
        const appliedTime = urlParams.get('appliedTime');
        const WLStatus = urlParams.get('WLStatus') || '1';

        const params = new URLSearchParams({
            paymentMethod: selectedPayment,
            totalPayment: totalPayment,
            appliedTime: appliedTime,
            WLStatus: WLStatus
        });

        if (selectedLoanTerm) {
            params.append('loanTerm', selectedLoanTerm);
        }

        window.location.href = `paymentResult.html?${params.toString()}`;
    }
}); 