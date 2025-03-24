// Language constants
const LANGUAGE = {
    ENGLISH: 'en',
    THAI: 'th'
};

// Translations for Credit/Loan related pages
const creditTranslations = {
    // Homepage translations
    'available_credit_limit': {
        [LANGUAGE.ENGLISH]: 'Available Credit Limit',
        [LANGUAGE.THAI]: 'วงเงินสินเชื่อที่ใช้ได้'
    },
    'you_can_pay': {
        [LANGUAGE.ENGLISH]: 'You can pay within available credit.',
        [LANGUAGE.THAI]: 'คุณสามารถชำระเงินภายในวงเงินที่มีอยู่'
    },
    'use_now': {
        [LANGUAGE.ENGLISH]: 'Use Now',
        [LANGUAGE.THAI]: 'ใช้ตอนนี้'
    },
    'total_credit_limit': {
        [LANGUAGE.ENGLISH]: 'Total Credit Limit',
        [LANGUAGE.THAI]: 'วงเงินสินเชื่อทั้งหมด'
    },
    'outstanding_loans': {
        [LANGUAGE.ENGLISH]: 'Outstanding Loans',
        [LANGUAGE.THAI]: 'เงินกู้คงค้าง'
    },
    'loan_amount': {
        [LANGUAGE.ENGLISH]: 'Loan amount:',
        [LANGUAGE.THAI]: 'จำนวนเงินกู้:'
    },
    'due_on': {
        [LANGUAGE.ENGLISH]: 'due on',
        [LANGUAGE.THAI]: 'ครบกำหนดเมื่อ'
    },
    'paid': {
        [LANGUAGE.ENGLISH]: 'Paid',
        [LANGUAGE.THAI]: 'ชำระแล้ว'
    },
    'easypay_for_sellers': {
        [LANGUAGE.ENGLISH]: 'SEasyPay for Sellers',
        [LANGUAGE.THAI]: 'SEasyPay สำหรับผู้ขาย'
    },

    // Loan Detail Page translations
    'loan_details': {
        [LANGUAGE.ENGLISH]: 'Loan Details',
        [LANGUAGE.THAI]: 'รายละเอียดเงินกู้'
    },
    'total_loan_amount': {
        [LANGUAGE.ENGLISH]: 'Total loan amount',
        [LANGUAGE.THAI]: 'จำนวนเงินกู้ทั้งหมด'
    },
    'applied_time': {
        [LANGUAGE.ENGLISH]: 'Applied Time',
        [LANGUAGE.THAI]: 'เวลาที่สมัคร'
    },
    'loan_tenure': {
        [LANGUAGE.ENGLISH]: 'Loan Tenure',
        [LANGUAGE.THAI]: 'ระยะเวลากู้'
    },
    'repaid_amount': {
        [LANGUAGE.ENGLISH]: 'Repaid Amount',
        [LANGUAGE.THAI]: 'จำนวนเงินที่ชำระคืนแล้ว'
    },
    'instalment_fee': {
        [LANGUAGE.ENGLISH]: 'Instalment Fee',
        [LANGUAGE.THAI]: 'ค่าธรรมเนียมการผ่อนชำระ'
    },
    'loan_id': {
        [LANGUAGE.ENGLISH]: 'Loan ID',
        [LANGUAGE.THAI]: 'รหัสเงินกู้'
    },
    'monthly_repayment_details': {
        [LANGUAGE.ENGLISH]: 'Monthly Repayment Details',
        [LANGUAGE.THAI]: 'รายละเอียดการชำระคืนรายเดือน'
    },
    'due_date': {
        [LANGUAGE.ENGLISH]: 'Due Date:',
        [LANGUAGE.THAI]: 'วันครบกำหนด:'
    },
    'unpaid': {
        [LANGUAGE.ENGLISH]: 'Unpaid',
        [LANGUAGE.THAI]: 'ยังไม่ชำระ'
    },
    'pay_loan': {
        [LANGUAGE.ENGLISH]: 'Pay Loan',
        [LANGUAGE.THAI]: 'ชำระเงินกู้'
    },

    // Repay Page translations
    'repayment': {
        [LANGUAGE.ENGLISH]: 'Repayment',
        [LANGUAGE.THAI]: 'การชำระคืน'
    },
    'repay_amount': {
        [LANGUAGE.ENGLISH]: 'Repay Amount',
        [LANGUAGE.THAI]: 'จำนวนเงินชำระคืน'
    },
    'payment_option': {
        [LANGUAGE.ENGLISH]: 'Payment Option',
        [LANGUAGE.THAI]: 'ตัวเลือกการชำระเงิน'
    },
    'shopee_wallet': {
        [LANGUAGE.ENGLISH]: 'Shopee Wallet',
        [LANGUAGE.THAI]: 'Shopee Wallet'
    },
    'total_repayment': {
        [LANGUAGE.ENGLISH]: 'Total Repayment',
        [LANGUAGE.THAI]: 'การชำระคืนทั้งหมด'
    },
    'all': {
        [LANGUAGE.ENGLISH]: 'All',
        [LANGUAGE.THAI]: 'ทั้งหมด'
    },
    'pay': {
        [LANGUAGE.ENGLISH]: 'Pay',
        [LANGUAGE.THAI]: 'ชำระเงิน'
    }
};

// Initialize currentLanguage from localStorage or default to English
const savedLanguage = localStorage.getItem('selectedLanguage');
let currentLanguage = savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI) 
    ? savedLanguage 
    : LANGUAGE.ENGLISH;

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Function to get translation
function getCreditTranslation(key) {
    if (creditTranslations[key] && creditTranslations[key][currentLanguage]) {
        return creditTranslations[key][currentLanguage];
    }
    console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
    return key;
}

// Function to update all text elements on the page
function updatePageLanguage() {
    // Get the latest language setting from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI)) {
        currentLanguage = savedLanguage;
    }

    // Update all elements with data-credit-lang attribute
    const elements = document.querySelectorAll('[data-credit-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-credit-lang');
        if (key) {
            const translation = getCreditTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize language immediately when script loads
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});

// Add MutationObserver to handle dynamically added elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            updatePageLanguage();
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
}); 