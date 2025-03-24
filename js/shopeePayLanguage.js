// ShopeePay Home translations
const shopeePayTranslations = {
    // Header section
    'shopeepay': {
        [LANGUAGE.ENGLISH]: 'ShopeePay',
        [LANGUAGE.THAI]: 'ShopeePay'
    },
    'shopeepay_balance': {
        [LANGUAGE.ENGLISH]: 'ShopeePay Balance',
        [LANGUAGE.THAI]: 'ยอดเงิน ShopeePay'
    },
    'top_up': {
        [LANGUAGE.ENGLISH]: 'Top Up',
        [LANGUAGE.THAI]: 'เติมเงิน'
    },
    'transfer': {
        [LANGUAGE.ENGLISH]: 'Transfer',
        [LANGUAGE.THAI]: 'โอนเงิน'
    },
    'history': {
        [LANGUAGE.ENGLISH]: 'History',
        [LANGUAGE.THAI]: 'ประวัติ'
    },

    // Menu section
    'scan': {
        [LANGUAGE.ENGLISH]: 'Scan',
        [LANGUAGE.THAI]: 'สแกน'
    },
    'bill': {
        [LANGUAGE.ENGLISH]: 'Bill',
        [LANGUAGE.THAI]: 'บิล'
    },
    'internet': {
        [LANGUAGE.ENGLISH]: 'Internet',
        [LANGUAGE.THAI]: 'อินเทอร์เน็ต'
    },
    'insurance': {
        [LANGUAGE.ENGLISH]: 'Insurance',
        [LANGUAGE.THAI]: 'ประกัน'
    },
    'travel': {
        [LANGUAGE.ENGLISH]: 'Travel',
        [LANGUAGE.THAI]: 'ท่องเที่ยว'
    },
    'food': {
        [LANGUAGE.ENGLISH]: 'Food',
        [LANGUAGE.THAI]: 'อาหาร'
    },
    'deals': {
        [LANGUAGE.ENGLISH]: 'Deals',
        [LANGUAGE.THAI]: 'ดีล'
    },
    'more': {
        [LANGUAGE.ENGLISH]: 'More',
        [LANGUAGE.THAI]: 'เพิ่มเติม'
    },

    // Banner section
    'promotion_banner': {
        [LANGUAGE.ENGLISH]: 'Promotion Banner',
        [LANGUAGE.THAI]: 'แบนเนอร์โปรโมชั่น'
    },

    // Credit section
    'seller_loan_credit': {
        [LANGUAGE.ENGLISH]: 'Seller Loan Credit',
        [LANGUAGE.THAI]: 'วงเงินสินเชื่อผู้ขาย'
    },
    'view_history': {
        [LANGUAGE.ENGLISH]: 'View History >',
        [LANGUAGE.THAI]: 'ดูประวัติ >'
    },
    'seller_loan': {
        [LANGUAGE.ENGLISH]: 'Seller Loan',
        [LANGUAGE.THAI]: 'สินเชื่อผู้ขาย'
    },
    'available_credit': {
        [LANGUAGE.ENGLISH]: 'Available Credit',
        [LANGUAGE.THAI]: 'วงเงินที่ใช้ได้'
    },
    'apply_for_loan': {
        [LANGUAGE.ENGLISH]: 'Apply for Loan',
        [LANGUAGE.THAI]: 'สมัครสินเชื่อ'
    }
};

// Add shopeePayTranslations to the global translations object
Object.assign(translations, shopeePayTranslations);

// Override the setLanguage function to use selectedLanguage key
const originalSetLanguage = setLanguage;
setLanguage = function(lang) {
    if (lang === LANGUAGE.ENGLISH || lang === LANGUAGE.THAI) {
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        updatePageLanguage();
        
        // Update active class for language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`.lang-btn:nth-child(${lang === LANGUAGE.ENGLISH ? 1 : 2})`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        return true;
    }
    return false;
};

// Language switcher UI
function addLanguageSwitcher() {
    // Create language switcher container
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher';
    
    // Create English button
    const enButton = document.createElement('button');
    enButton.className = 'lang-btn' + (getCurrentLanguage() === LANGUAGE.ENGLISH ? ' active' : '');
    enButton.textContent = 'EN';
    enButton.onclick = () => setLanguage(LANGUAGE.ENGLISH);
    
    // Create Thai button
    const thButton = document.createElement('button');
    thButton.className = 'lang-btn' + (getCurrentLanguage() === LANGUAGE.THAI ? ' active' : '');
    thButton.textContent = 'ไทย';
    thButton.onclick = () => setLanguage(LANGUAGE.THAI);
    
    // Append buttons to container
    switcherContainer.appendChild(enButton);
    switcherContainer.appendChild(thButton);
    
    // Add container after the header title
    const headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        headerTitle.insertAdjacentElement('afterend', switcherContainer);
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addLanguageSwitcher();
    
    // Check local storage for language setting
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI)) {
        setLanguage(savedLanguage);
    }
}); 