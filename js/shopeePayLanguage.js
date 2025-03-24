// ShopeePay Home translations
window.shopeePayTranslations = {
    // Header section
    'shopeepay': {
        'en': 'ShopeePay',
        'th': 'ShopeePay'
    },
    'shopeepay_balance': {
        'en': 'ShopeePay Balance',
        'th': 'ยอดเงิน ShopeePay'
    },
    'top_up': {
        'en': 'Top Up',
        'th': 'เติมเงิน'
    },
    'transfer': {
        'en': 'Transfer',
        'th': 'โอนเงิน'
    },
    'history': {
        'en': 'History',
        'th': 'ประวัติ'
    },

    // Menu section
    'scan': {
        'en': 'Scan',
        'th': 'สแกน'
    },
    'bill': {
        'en': 'Bill',
        'th': 'บิล'
    },
    'internet': {
        'en': 'Internet',
        'th': 'อินเทอร์เน็ต'
    },
    'insurance': {
        'en': 'Insurance',
        'th': 'ประกัน'
    },
    'travel': {
        'en': 'Travel',
        'th': 'ท่องเที่ยว'
    },
    'food': {
        'en': 'Food',
        'th': 'อาหาร'
    },
    'deals': {
        'en': 'Deals',
        'th': 'ดีล'
    },
    'more': {
        'en': 'More',
        'th': 'เพิ่มเติม'
    },

    // Banner section
    'promotion_banner': {
        'en': 'Promotion Banner',
        'th': 'แบนเนอร์โปรโมชั่น'
    },

    // Credit section
    'seller_loan_credit': {
        'en': 'Seller Loan Credit',
        'th': 'วงเงินสินเชื่อผู้ขาย'
    },
    'view_history': {
        'en': 'View History >',
        'th': 'ดูประวัติ >'
    },
    'seller_loan': {
        'en': 'Seller Loan',
        'th': 'สินเชื่อผู้ขาย'
    },
    'available_credit': {
        'en': 'Available Credit',
        'th': 'วงเงินที่ใช้ได้'
    },
    'apply_for_loan': {
        'en': 'Apply for Loan',
        'th': 'สมัครสินเชื่อ'
    },
    
    // Added translations for new layout
    'splaylater': {
        'en': 'SPlayLater',
        'th': 'SPlayLater'
    },
    'home': {
        'en': 'Home',
        'th': 'หน้าแรก'
    },
    'notification': {
        'en': 'Notification',
        'th': 'การแจ้งเตือน'
    },
    'me': {
        'en': 'Me',
        'th': 'ฉัน'
    },
    'new': {
        'en': 'New!',
        'th': 'ใหม่!'
    },
    'topup': {
        'en': 'Topup',
        'th': 'เติมเงิน'
    },
    'scan_pay': {
        'en': 'Scan & Pay',
        'th': 'สแกน & จ่าย'
    },
    'vouchers': {
        'en': 'Vouchers',
        'th': 'คูปอง'
    },
    'zero_interest': {
        'en': '0% interest on all installment plans for up to 1 month.',
        'th': 'ดอกเบี้ย 0% สำหรับแผนผ่อนชำระทั้งหมดสูงสุด 1 เดือน'
    },
    'activate_now': {
        'en': 'Activate Now',
        'th': 'เปิดใช้งานเดี๋ยวนี้'
    },
    'seasypay': {
        'en': 'SEasyPay',
        'th': 'SEasyPay'
    },
    'pay_now': {
        'en': 'Pay Now',
        'th': 'ชำระตอนนี้'
    },
    'outstanding_amount': {
        'en': 'Outstanding Amount:',
        'th': 'ยอดค้างชำระ:'
    },
    'next_due_date': {
        'en': 'Next Due Date:',
        'th': 'วันครบกำหนดถัดไป:'
    }
};

// Add debug function to check if translations are working
function debugLanguage() {
    console.log("Current Language:", currentLanguage);
    console.log("localStorage 'selectedLanguage':", localStorage.getItem('selectedLanguage'));
    console.log("Sample translation (shopeepay_balance):", getTranslation('shopeepay_balance'));
    console.log("All translations:", translations);
}

// Add shopeePayTranslations to the global translations object
Object.assign(translations, window.shopeePayTranslations);
console.log("ShopeePayTranslations added to global translations");

// Function to update language switcher UI
function updateLanguageSwitcherUI(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(lang === LANGUAGE.ENGLISH ? '.lang-btn-en' : '.lang-btn-th');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Language switcher UI
function addLanguageSwitcher() {
    console.log("Adding language switcher");
    
    // Check if language switcher already exists
    if (document.querySelector('.language-switcher')) {
        console.log("Language switcher already exists");
        return;
    }
    
    // Create language switcher container
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher';
    
    // Create English button
    const enButton = document.createElement('button');
    enButton.className = 'lang-btn lang-btn-en' + (window.currentLanguage === 'en' ? ' active' : '');
    enButton.textContent = 'EN';
    enButton.onclick = function() {
        console.log("Switching to English");
        if (typeof window.setLanguage === 'function') {
            window.setLanguage('en');
        } else {
            console.error("setLanguage function not available");
            // 备用逻辑
            window.currentLanguage = 'en';
            localStorage.setItem('selectedLanguage', 'en');
            if (typeof window.updatePageLanguage === 'function') {
                window.updatePageLanguage();
            }
        }
    };
    
    // Create Thai button
    const thButton = document.createElement('button');
    thButton.className = 'lang-btn lang-btn-th' + (window.currentLanguage === 'th' ? ' active' : '');
    thButton.textContent = 'ไทย';
    thButton.onclick = function() {
        console.log("Switching to Thai");
        if (typeof window.setLanguage === 'function') {
            window.setLanguage('th');
        } else {
            console.error("setLanguage function not available");
            // 备用逻辑
            window.currentLanguage = 'th';
            localStorage.setItem('selectedLanguage', 'th');
            if (typeof window.updatePageLanguage === 'function') {
                window.updatePageLanguage();
            }
        }
    };
    
    // Append buttons to container
    switcherContainer.appendChild(enButton);
    switcherContainer.appendChild(thButton);
    
    // Add container after the header title
    const headerTitle = document.querySelector('.shopeepay-text');
    if (headerTitle) {
        headerTitle.insertAdjacentElement('afterend', switcherContainer);
    } else {
        // 备用位置：找 header-title 类的元素
        const backupTitle = document.querySelector('.header-title');
        if (backupTitle) {
            backupTitle.insertAdjacentElement('afterend', switcherContainer);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded in shopeePayLanguage.js");
    
    // Add language switcher
    addLanguageSwitcher();
    
    // Check local storage for language setting and force update
    const savedLanguage = localStorage.getItem('selectedLanguage');
    console.log("Initial savedLanguage:", savedLanguage);
    
    if (savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI)) {
        console.log("Setting current language to:", savedLanguage);
        
        // 使用共享语言机制设置语言
        if (typeof setLanguage === 'function') {
            setLanguage(savedLanguage);
        }
    }
    
    // Run debug to check language setup
    debugLanguage();
    
    // 确保所有翻译都已应用
    setTimeout(function() {
        console.log("Delayed force update of translations");
        // Force update all text elements with translations again
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (key && typeof getTranslation === 'function') {
                const translation = getTranslation(key);
                if (translation) {
                    console.log(`Updating element with key ${key} to ${translation}`);
                    element.textContent = translation;
                }
            }
        });
    }, 100);
}); 