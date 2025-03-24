// Language constants
const LANGUAGE = {
    ENGLISH: 'en',
    THAI: 'th'
};

// Initialize currentLanguage from localStorage or default to English
const savedLanguage = localStorage.getItem('language');
let currentLanguage = savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI) 
    ? savedLanguage 
    : LANGUAGE.ENGLISH;

// Translations for UI elements
const translations = {
    // Application Result Page
    'application_result': {
        [LANGUAGE.ENGLISH]: 'Application Result',
        [LANGUAGE.THAI]: 'ผลการสมัคร'
    },
    'payment_method': {
        [LANGUAGE.ENGLISH]: 'Payment Method',
        [LANGUAGE.THAI]: 'วิธีการชำระเงิน'
    },
    'view_all_methods': {
        [LANGUAGE.ENGLISH]: 'View all methods >',
        [LANGUAGE.THAI]: 'ดูวิธีทั้งหมด >'
    },
    'seller_loan': {
        [LANGUAGE.ENGLISH]: 'Seller Loan',
        [LANGUAGE.THAI]: 'สินเชื่อผู้ขาย'
    },
    'available': {
        [LANGUAGE.ENGLISH]: 'Available',
        [LANGUAGE.THAI]: 'ที่ใช้ได้'
    },
    'recommended': {
        [LANGUAGE.ENGLISH]: 'Recommended',
        [LANGUAGE.THAI]: 'แนะนำ'
    },
    'total_payment': {
        [LANGUAGE.ENGLISH]: 'Total Payment',
        [LANGUAGE.THAI]: 'ยอดชำระทั้งหมด'
    },
    'pay_now': {
        [LANGUAGE.ENGLISH]: 'Pay Now',
        [LANGUAGE.THAI]: 'ชำระเงินทันที'
    },

    // Payment Result Page
    'payment_result': {
        [LANGUAGE.ENGLISH]: 'Payment Result',
        [LANGUAGE.THAI]: 'ผลการชำระเงิน'
    },
    'view_qr': {
        [LANGUAGE.ENGLISH]: 'View QR',
        [LANGUAGE.THAI]: 'ดู QR'
    },
    'redirect_text': {
        [LANGUAGE.ENGLISH]: 'You will be redirect back to the merchant\'s website in',
        [LANGUAGE.THAI]: 'คุณจะถูกนำกลับไปยังเว็บไซต์ร้านค้าใน'
    },
    'seconds': {
        [LANGUAGE.ENGLISH]: 'seconds',
        [LANGUAGE.THAI]: 'วินาที'
    },
    'go_now': {
        [LANGUAGE.ENGLISH]: 'Go Now',
        [LANGUAGE.THAI]: 'ไปตอนนี้'
    },
    'you_paid': {
        [LANGUAGE.ENGLISH]: 'You Paid',
        [LANGUAGE.THAI]: 'คุณชำระแล้ว'
    },
    'purchase_amount': {
        [LANGUAGE.ENGLISH]: 'Purchase Amount',
        [LANGUAGE.THAI]: 'ยอดซื้อ'
    },
    'order_details': {
        [LANGUAGE.ENGLISH]: 'Order Details',
        [LANGUAGE.THAI]: 'รายละเอียดคำสั่งซื้อ'
    },
    'transaction_sn': {
        [LANGUAGE.ENGLISH]: 'Transaction SN',
        [LANGUAGE.THAI]: 'หมายเลขธุรกรรม'
    },
    'order_sn': {
        [LANGUAGE.ENGLISH]: 'Order SN',
        [LANGUAGE.THAI]: 'หมายเลขคำสั่งซื้อ'
    },
    'merchant_ref_id': {
        [LANGUAGE.ENGLISH]: 'Merchant Ref ID',
        [LANGUAGE.THAI]: 'รหัสอ้างอิงร้านค้า'
    },
    'back_to_merchant': {
        [LANGUAGE.ENGLISH]: 'Back to Merchant',
        [LANGUAGE.THAI]: 'กลับไปที่ร้านค้า'
    },

    // Landing Page
    'easypay_sellers': {
        [LANGUAGE.ENGLISH]: 'SEasyPay for Sellers',
        [LANGUAGE.THAI]: 'SEasyPay สำหรับผู้ขาย'
    },
    'get_up_to': {
        [LANGUAGE.ENGLISH]: 'You Can Get Up To',
        [LANGUAGE.THAI]: 'คุณสามารถรับได้สูงถึง'
    },
    'free_activation': {
        [LANGUAGE.ENGLISH]: 'Free activation to claim your limit first',
        [LANGUAGE.THAI]: 'เปิดใช้งานฟรีเพื่อรับวงเงินของคุณก่อน'
    },
    'loan_simulation': {
        [LANGUAGE.ENGLISH]: 'Loan Simulation',
        [LANGUAGE.THAI]: 'จำลองการกู้'
    },
    'activate_now': {
        [LANGUAGE.ENGLISH]: 'Activate Now',
        [LANGUAGE.THAI]: 'เปิดใช้งานเดี๋ยวนี้'
    },
    'about_easypay': {
        [LANGUAGE.ENGLISH]: 'About SEasyPay for Sellers',
        [LANGUAGE.THAI]: 'เกี่ยวกับ SEasyPay สำหรับผู้ขาย'
    },
    'easypay_intro': {
        [LANGUAGE.ENGLISH]: 'SEasyPay for Sellers provides an entrusted payment loan to support businesses under BOT regulation',
        [LANGUAGE.THAI]: 'SEasyPay สำหรับผู้ขายให้บริการสินเชื่อการชำระเงินที่ได้รับความไว้วางใจเพื่อสนับสนุนธุรกิจภายใต้การกำกับดูแลของ ธปท.'
    },
    'benefits': {
        [LANGUAGE.ENGLISH]: 'Benefits',
        [LANGUAGE.THAI]: 'ประโยชน์'
    },
    'how_it_works': {
        [LANGUAGE.ENGLISH]: 'How It Works?',
        [LANGUAGE.THAI]: 'วิธีการทำงาน?'
    },
    'learn_more': {
        [LANGUAGE.ENGLISH]: 'Learn More',
        [LANGUAGE.THAI]: 'เรียนรู้เพิ่มเติม'
    },

    // Additional translations
    'get_approved_minutes': {
        [LANGUAGE.ENGLISH]: 'Get approved in minutes',
        [LANGUAGE.THAI]: 'ได้รับการอนุมัติภายในไม่กี่นาที'
    },
    'sign_up_steps': {
        [LANGUAGE.ENGLISH]: 'sign up in just 3 simple steps',
        [LANGUAGE.THAI]: 'สมัครเพียง 3 ขั้นตอนง่ายๆ'
    },
    'collateral_free': {
        [LANGUAGE.ENGLISH]: 'Collatareall-free',
        [LANGUAGE.THAI]: 'ไม่ต้องใช้หลักประกัน'
    },
    'competitive_rates': {
        [LANGUAGE.ENGLISH]: 'loan with competitive rates starting at',
        [LANGUAGE.THAI]: 'เงินกู้ด้วยอัตราดอกเบี้ยที่แข่งขันได้เริ่มต้นที่'
    },
    'exclusive_discounts': {
        [LANGUAGE.ENGLISH]: 'Enjoy exclusive discounts from PMI',
        [LANGUAGE.THAI]: 'รับส่วนลดพิเศษจาก PMI'
    },
    'activate_account': {
        [LANGUAGE.ENGLISH]: 'Activate your accoount for free',
        [LANGUAGE.THAI]: 'เปิดใช้งานบัญชีของคุณฟรี'
    },
    'enter_invoice': {
        [LANGUAGE.ENGLISH]: 'Enter the invoice amount upon delivery',
        [LANGUAGE.THAI]: 'ใส่จำนวนเงินในใบแจ้งหนี้เมื่อได้รับสินค้า'
    },
    'withdraw_show': {
        [LANGUAGE.ENGLISH]: 'Withdraw and show the confirmation page to delivery person',
        [LANGUAGE.THAI]: 'ถอนเงินและแสดงหน้ายืนยันให้พนักงานส่งสินค้า'
    },
    'repay_withdraw': {
        [LANGUAGE.ENGLISH]: 'Repay and withdraw again anytime',
        [LANGUAGE.THAI]: 'ชำระคืนและถอนได้อีกครั้งเมื่อไหร่ก็ได้'
    },
    'zero_interest': {
        [LANGUAGE.ENGLISH]: '0% interest on all installment plans for up to 1 month.',
        [LANGUAGE.THAI]: 'ดอกเบี้ย 0% สำหรับแผนผ่อนชำระทั้งหมดสูงสุด 1 เดือน'
    },
    'limited_offer': {
        [LANGUAGE.ENGLISH]: 'Limited offer until',
        [LANGUAGE.THAI]: 'ข้อเสนอพิเศษถึง'
    },
    'more_details': {
        [LANGUAGE.ENGLISH]: 'More details',
        [LANGUAGE.THAI]: 'รายละเอียดเพิ่มเติม'
    },

    // Loan Terms
    'days': {
        [LANGUAGE.ENGLISH]: 'days',
        [LANGUAGE.THAI]: 'วัน'
    },
    'month': {
        [LANGUAGE.ENGLISH]: 'month',
        [LANGUAGE.THAI]: 'เดือน'
    },
    'per_day': {
        [LANGUAGE.ENGLISH]: '/day',
        [LANGUAGE.THAI]: '/วัน'
    },
    '7_days': {
        [LANGUAGE.ENGLISH]: '7 days',
        [LANGUAGE.THAI]: '7 วัน'
    },
    '14_days': {
        [LANGUAGE.ENGLISH]: '14 days',
        [LANGUAGE.THAI]: '14 วัน'
    },
    '1_month': {
        [LANGUAGE.ENGLISH]: '1 month',
        [LANGUAGE.THAI]: '1 เดือน'
    },
    'loan_rate': {
        [LANGUAGE.ENGLISH]: '(0.5%/day)',
        [LANGUAGE.THAI]: '(0.5%/วัน)'
    },
    'merchant_name': {
        [LANGUAGE.ENGLISH]: 'PMI Wholesaler Shop',
        [LANGUAGE.THAI]: 'ร้านค้าส่ง PMI'
    },
    'shopeepay': {
        [LANGUAGE.ENGLISH]: 'ShopeePay',
        [LANGUAGE.THAI]: 'ShopeePay'
    },
    'available_balance': {
        [LANGUAGE.ENGLISH]: '(฿1000.00)',
        [LANGUAGE.THAI]: '(฿1000.00)'
    },

    // PIN Drawer translations
    'enter_pin': {
        [LANGUAGE.ENGLISH]: 'Enter ShopeePay PIN',
        [LANGUAGE.THAI]: 'ใส่รหัส PIN ShopeePay'
    },
    'forgot_pin': {
        [LANGUAGE.ENGLISH]: 'Forgot ShopeePay PIN?',
        [LANGUAGE.THAI]: 'ลืมรหัส PIN ShopeePay?'
    },
    'security_keyboard': {
        [LANGUAGE.ENGLISH]: 'ShopeePay Security Keyboard',
        [LANGUAGE.THAI]: 'แป้นพิมพ์ความปลอดภัย ShopeePay'
    },

    // Promotion Banner translations
    'promotion_title': {
        [LANGUAGE.ENGLISH]: 'Enjoy 0% interest on all orders pay with Seller Loan',
        [LANGUAGE.THAI]: 'รับดอกเบี้ย 0% สำหรับทุกคำสั่งซื้อที่ชำระด้วยสินเชื่อผู้ขาย'
    },
    'limited_offer_until': {
        [LANGUAGE.ENGLISH]: 'Limited offer until 31-10-2025',
        [LANGUAGE.THAI]: 'ข้อเสนอพิเศษถึง 31-10-2025'
    },
    'more_details': {
        [LANGUAGE.ENGLISH]: 'More details',
        [LANGUAGE.THAI]: 'รายละเอียดเพิ่มเติม'
    },

    // Loan Details translations
    'loan_details': {
        [LANGUAGE.ENGLISH]: 'Loan Details',
        [LANGUAGE.THAI]: 'รายละเอียดเงินกู้'
    },
    'loan_id': {
        [LANGUAGE.ENGLISH]: 'Loan ID',
        [LANGUAGE.THAI]: 'รหัสเงินกู้'
    },
    'loan_tenure': {
        [LANGUAGE.ENGLISH]: 'Loan Tenure',
        [LANGUAGE.THAI]: 'ระยะเวลากู้'
    },
    'loan_principle': {
        [LANGUAGE.ENGLISH]: 'Loan Principle',
        [LANGUAGE.THAI]: 'เงินต้น'
    },
    'loan_interest': {
        [LANGUAGE.ENGLISH]: 'Loan Interest',
        [LANGUAGE.THAI]: 'ดอกเบี้ย'
    },
    
    // ShopeePay Home translations
    'topup': {
        [LANGUAGE.ENGLISH]: 'Topup',
        [LANGUAGE.THAI]: 'เติมเงิน'
    },
    'scan_pay': {
        [LANGUAGE.ENGLISH]: 'Scan & Pay',
        [LANGUAGE.THAI]: 'สแกนจ่าย'
    },
    'transfer': {
        [LANGUAGE.ENGLISH]: 'Transfer',
        [LANGUAGE.THAI]: 'โอนเงิน'
    },
    'vouchers': {
        [LANGUAGE.ENGLISH]: 'Vouchers',
        [LANGUAGE.THAI]: 'คูปอง'
    },
    'local_service': {
        [LANGUAGE.ENGLISH]: 'Local Service',
        [LANGUAGE.THAI]: 'บริการท้องถิ่น'
    },
    'shopee': {
        [LANGUAGE.ENGLISH]: 'Shopee',
        [LANGUAGE.THAI]: 'ช้อปปี้'
    },
    'food': {
        [LANGUAGE.ENGLISH]: 'Food',
        [LANGUAGE.THAI]: 'อาหาร'
    },
    'splaylater': {
        [LANGUAGE.ENGLISH]: 'SPlayLater',
        [LANGUAGE.THAI]: 'SPlayLater'
    },
    'seasycash': {
        [LANGUAGE.ENGLISH]: 'SEasyCash',
        [LANGUAGE.THAI]: 'SEasyCash'
    },
    'insurance': {
        [LANGUAGE.ENGLISH]: 'Insurance',
        [LANGUAGE.THAI]: 'ประกันภัย'
    },
    'seasypay': {
        [LANGUAGE.ENGLISH]: 'SEasyPay',
        [LANGUAGE.THAI]: 'SEasyPay'
    },
    'more': {
        [LANGUAGE.ENGLISH]: 'More',
        [LANGUAGE.THAI]: 'เพิ่มเติม'
    },
    'new': {
        [LANGUAGE.ENGLISH]: 'New!',
        [LANGUAGE.THAI]: 'ใหม่!'
    },
    'overdue': {
        [LANGUAGE.ENGLISH]: 'Overdue',
        [LANGUAGE.THAI]: 'เกินกำหนด'
    },
    'outstanding_amount': {
        [LANGUAGE.ENGLISH]: 'Outstanding Amount:',
        [LANGUAGE.THAI]: 'ยอดคงเหลือ:'
    },
    'next_due_date': {
        [LANGUAGE.ENGLISH]: 'Next Due Date:',
        [LANGUAGE.THAI]: 'วันครบกำหนดถัดไป:'
    },
    'home': {
        [LANGUAGE.ENGLISH]: 'Home',
        [LANGUAGE.THAI]: 'หน้าหลัก'
    },
    'history': {
        [LANGUAGE.ENGLISH]: 'History',
        [LANGUAGE.THAI]: 'ประวัติ'
    },
    'notification': {
        [LANGUAGE.ENGLISH]: 'Notification',
        [LANGUAGE.THAI]: 'แจ้งเตือน'
    },
    'me': {
        [LANGUAGE.ENGLISH]: 'Me',
        [LANGUAGE.THAI]: 'ฉัน'
    },
    'electricity_bill': {
        [LANGUAGE.ENGLISH]: 'Electricity Bill',
        [LANGUAGE.THAI]: 'ค่าไฟฟ้า'
    }
};

// Function to set language
function setLanguage(lang) {
    if (lang === LANGUAGE.ENGLISH || lang === LANGUAGE.THAI) {
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        updatePageLanguage();
        return true;
    }
    return false;
}

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Function to get translation
function getTranslation(key) {
    if (translations[key] && translations[key][currentLanguage]) {
        return translations[key][currentLanguage];
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

    // Update all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (key) {
            const translation = getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize language immediately when script loads
updatePageLanguage();

// Also initialize when DOM is loaded (for dynamic content)
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