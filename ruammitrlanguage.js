// Language constants
const LANGUAGE = {
    ENGLISH: 'en',
    THAI: 'th'
};

// Default language setting
let currentLanguage = LANGUAGE.ENGLISH;

// Translations for UI elements
const translations = {
    // Header
    'page_title': {
        [LANGUAGE.ENGLISH]: 'Order Details',
        [LANGUAGE.THAI]: 'รายละเอียดคำสั่งซื้อ'
    },
    
    // Demo Setup page
    'demo_setup_title': {
        [LANGUAGE.ENGLISH]: 'Select Demo Mode',
        [LANGUAGE.THAI]: 'เลือกโหมดสาธิต'
    },
    'happy_flow_title': {
        [LANGUAGE.ENGLISH]: 'Happy Flow',
        [LANGUAGE.THAI]: 'โฟลว์ปกติ'
    },
    'exception_flow_title': {
        [LANGUAGE.ENGLISH]: 'Exception Flow',
        [LANGUAGE.THAI]: 'โฟลว์ข้อยกเว้น'
    },
    'spp_homepage_title': {
        [LANGUAGE.ENGLISH]: 'SPP Homepage',
        [LANGUAGE.THAI]: 'หน้าหลัก SPP'
    },
    'activated_user': {
        [LANGUAGE.ENGLISH]: 'Activated user',
        [LANGUAGE.THAI]: 'ผู้ใช้ที่เปิดใช้งาน'
    },
    'new_whitelisted_user': {
        [LANGUAGE.ENGLISH]: 'New whitelisted user',
        [LANGUAGE.THAI]: 'ผู้ใช้ในรายชื่อใหม่'
    },
    'not_whitelisted_user': {
        [LANGUAGE.ENGLISH]: 'Not whitelisted user',
        [LANGUAGE.THAI]: 'ผู้ใช้ที่ไม่อยู่ในรายชื่อ'
    },
    'limit_not_enough': {
        [LANGUAGE.ENGLISH]: 'Limit Not Enough',
        [LANGUAGE.THAI]: 'วงเงินไม่เพียงพอ'
    },
    'overdue': {
        [LANGUAGE.ENGLISH]: 'Overdue',
        [LANGUAGE.THAI]: 'เลยกำหนดชำระ'
    },
    'activated_user_spp': {
        [LANGUAGE.ENGLISH]: 'Activated user',
        [LANGUAGE.THAI]: 'ผู้ใช้ที่เปิดใช้งาน'
    },
    'new_whitelisted_user_spp': {
        [LANGUAGE.ENGLISH]: 'New whitelisted user',
        [LANGUAGE.THAI]: 'ผู้ใช้ในรายชื่อใหม่'
    },
    'not_whitelisted_user_spp': {
        [LANGUAGE.ENGLISH]: 'Not whitelisted user',
        [LANGUAGE.THAI]: 'ผู้ใช้ที่ไม่อยู่ในรายชื่อ'
    },
    'demo_setup_options': {
        [LANGUAGE.ENGLISH]: 'Demo setup',
        [LANGUAGE.THAI]: 'ตั้งค่าการสาธิต'
    },
    'order_ready_option': {
        [LANGUAGE.ENGLISH]: 'Ruammitr Order Ready to Pay',
        [LANGUAGE.THAI]: 'คำสั่งซื้อร่วมมิตรพร้อมชำระเงิน'
    },
    
    // Discount section
    'discount_received': {
        [LANGUAGE.ENGLISH]: 'You have received a discount',
        [LANGUAGE.THAI]: 'คุณได้รับส่วนลด'
    },
    'get_coupon': {
        [LANGUAGE.ENGLISH]: 'Get Coupon',
        [LANGUAGE.THAI]: 'รับคูปอง'
    },
    
    // Order info
    'order_number': {
        [LANGUAGE.ENGLISH]: 'Order Number:',
        [LANGUAGE.THAI]: 'คำสั่งซื้อที่:'
    },
    'order_status': {
        [LANGUAGE.ENGLISH]: 'Shipping',
        [LANGUAGE.THAI]: 'กำลังจัดส่ง'
    },
    'return_status': {
        [LANGUAGE.ENGLISH]: 'Return requested due to defective product',
        [LANGUAGE.THAI]: 'ขอคืนสินค้าเนื่องจากสินค้าไม่ดี'
    },
    'waiting_confirmation_status': {
        [LANGUAGE.ENGLISH]: 'Waiting wholesaler to confirm order',
        [LANGUAGE.THAI]: 'รอร้านค้าส่งยืนยันคำสั่งซื้อ'
    },
    'waiting_acception_status': {
        [LANGUAGE.ENGLISH]: 'Waiting you to confirm receipt',
        [LANGUAGE.THAI]: 'รอคุณยืนยันการรับสินค้า'
    },
    'preparing_order_status': {
        [LANGUAGE.ENGLISH]: 'Preparing your order',
        [LANGUAGE.THAI]: 'กำลังจัดเตรียมสินค้า'
    },
    'shipping_status': {
        [LANGUAGE.ENGLISH]: 'Shipping in progress',
        [LANGUAGE.THAI]: 'กำลังจัดส่ง'
    },
    'order_successful_status': {
        [LANGUAGE.ENGLISH]: 'Order Successful',
        [LANGUAGE.THAI]: 'คำสั่งซื้อสำเร็จ'
    },
    'cancel_order': {
        [LANGUAGE.ENGLISH]: 'Cancel Order',
        [LANGUAGE.THAI]: 'ยกเลิกคำสั่งซื้อ'
    },
    'confirm_receipt': {
        [LANGUAGE.ENGLISH]: 'Confirm Receipt and Pay',
        [LANGUAGE.THAI]: 'ยืนยันการรับสินค้าและชำระเงิน'
    },
    'reject_receipt': {
        [LANGUAGE.ENGLISH]: 'Reject Receipt',
        [LANGUAGE.THAI]: 'ปฏิเสธการรับสินค้า'
    },
    'reorder_product': {
        [LANGUAGE.ENGLISH]: 'Order More Products',
        [LANGUAGE.THAI]: 'สั่งซื้อสินค้าจ้า'
    },
    'reorder_product_alert': {
        [LANGUAGE.ENGLISH]: 'Redirecting to new order page...',
        [LANGUAGE.THAI]: 'กำลังไปที่หน้าสั่งซื้อสินค้าใหม่...'
    },
    'slide_to_change': {
        [LANGUAGE.ENGLISH]: 'Slide to change status',
        [LANGUAGE.THAI]: 'เลื่อนเพื่อเปลี่ยนสถานะ'
    },
    'order_date': {
        [LANGUAGE.ENGLISH]: 'Order Date:',
        [LANGUAGE.THAI]: 'วันที่สั่งซื้อ:'
    },
    
    // Store info
    'store_info': {
        [LANGUAGE.ENGLISH]: 'Store Information',
        [LANGUAGE.THAI]: 'ข้อมูลร้านคำสั่ง'
    },
    'store_name': {
        [LANGUAGE.ENGLISH]: 'Store Name:',
        [LANGUAGE.THAI]: 'ชื่อร้านค้า:'
    },
    'store_name_value': {
        [LANGUAGE.ENGLISH]: 'Change Store Order',
        [LANGUAGE.THAI]: 'เปลี่ยนร้านค้าสั่ง'
    },
    'address': {
        [LANGUAGE.ENGLISH]: 'Address:',
        [LANGUAGE.THAI]: 'ที่อยู่:'
    },
    'address_value': {
        [LANGUAGE.ENGLISH]: 'Bang Phli Yai, Ratsadorn, Bangkok',
        [LANGUAGE.THAI]: 'แขวงบางพลีใหญ่, ราษฎร์, กรุงเทพฯ'
    },
    'phone': {
        [LANGUAGE.ENGLISH]: 'Phone:',
        [LANGUAGE.THAI]: 'เบอร์โทรศัพท์:'
    },
    
    // Products section
    'total_items': {
        [LANGUAGE.ENGLISH]: 'Total 10 items',
        [LANGUAGE.THAI]: 'ทั้งหมด 10 ชิ้น'
    },
    'product1_name': {
        [LANGUAGE.ENGLISH]: 'Nescafe Latte (1 can)',
        [LANGUAGE.THAI]: 'เนสกาแฟ ลาเต้ (กระป๋อง 1)'
    },
    'product2_name': {
        [LANGUAGE.ENGLISH]: 'Nescafe Kopiko Black White Instant Coffee 180ml (Pack of 30)',
        [LANGUAGE.THAI]: 'เนสกาแฟ โกปี้ดำ แม็ค ไวต์ กาแฟกระป๋องสำเร็จรูป 180 มล. (แพ็ค 30)'
    },
    'barcode': {
        [LANGUAGE.ENGLISH]: 'Barcode:',
        [LANGUAGE.THAI]: 'บาร์โค้ด:'
    },
    'price': {
        [LANGUAGE.ENGLISH]: 'Price:',
        [LANGUAGE.THAI]: 'ราคา:'
    },
    'quantity': {
        [LANGUAGE.ENGLISH]: 'Quantity:',
        [LANGUAGE.THAI]: 'จำนวน:'
    },
    'total_price': {
        [LANGUAGE.ENGLISH]: 'Total Price:',
        [LANGUAGE.THAI]: 'ราคารวม:'
    },
    
    // Shipping section
    'shipping_method': {
        [LANGUAGE.ENGLISH]: 'Shipping Method:',
        [LANGUAGE.THAI]: 'วิธีในของ:'
    },
    'shipping_method_value': {
        [LANGUAGE.ENGLISH]: 'Wait for store pickup',
        [LANGUAGE.THAI]: 'รอรับจากร้านส่ง'
    },
    'shipping_date': {
        [LANGUAGE.ENGLISH]: 'Shipping Dates:',
        [LANGUAGE.THAI]: 'วันที่จะส่งสินค้า:'
    },
    'shipping_date_value': {
        [LANGUAGE.ENGLISH]: 'Monday, Wednesday, Friday',
        [LANGUAGE.THAI]: 'จันทร์, พุธ, ศุกร์'
    },
    
    // Coupon section
    'order_coupons': {
        [LANGUAGE.ENGLISH]: 'Order Discount Coupons',
        [LANGUAGE.THAI]: 'คูปองส่วนลดในคำสั่งซื้อ'
    },
    'view_conditions': {
        [LANGUAGE.ENGLISH]: 'View Conditions',
        [LANGUAGE.THAI]: 'ดูเงื่อนไข'
    },
    'new_coupon': {
        [LANGUAGE.ENGLISH]: 'New Discount Coupon',
        [LANGUAGE.THAI]: 'คูปองส่วนลดใหม่'
    },
    
    // Price summary
    'subtotal': {
        [LANGUAGE.ENGLISH]: 'Subtotal before discount',
        [LANGUAGE.THAI]: 'ยอดรวมก่อนใช้ส่วนลด'
    },
    'product_discount': {
        [LANGUAGE.ENGLISH]: 'Product discount',
        [LANGUAGE.THAI]: 'ส่วนลดสินค้า'
    },
    'coupon_discount': {
        [LANGUAGE.ENGLISH]: 'Coupon discount',
        [LANGUAGE.THAI]: 'ส่วนลดจากโค้ด'
    },
    'total': {
        [LANGUAGE.ENGLISH]: 'Total',
        [LANGUAGE.THAI]: 'ราคาสุทธิ'
    },
    
    // Checkout button
    'checkout': {
        [LANGUAGE.ENGLISH]: 'Pay now',
        [LANGUAGE.THAI]: 'สั่งซื้อสินค้า'
    },
    
    // Alert messages
    'back_alert': {
        [LANGUAGE.ENGLISH]: 'Going back to previous page',
        [LANGUAGE.THAI]: 'กลับไปยังหน้าก่อนหน้า'
    },
    'coupon_applied': {
        [LANGUAGE.ENGLISH]: 'Coupon applied successfully!',
        [LANGUAGE.THAI]: 'ใช้คูปองสำเร็จแล้ว!'
    },
    'coupon_details': {
        [LANGUAGE.ENGLISH]: 'Coupon details: 10% off on your order!',
        [LANGUAGE.THAI]: 'รายละเอียดคูปอง: ลด 10% สำหรับคำสั่งซื้อของคุณ!'
    },
    'order_placed': {
        [LANGUAGE.ENGLISH]: 'Order placed successfully!',
        [LANGUAGE.THAI]: 'สั่งซื้อสำเร็จแล้ว!'
    },
    'confirm_receipt_alert': {
        [LANGUAGE.ENGLISH]: 'You have confirmed receipt of the order.',
        [LANGUAGE.THAI]: 'คุณได้ยืนยันการรับสินค้าแล้ว'
    },
    'reject_receipt_alert': {
        [LANGUAGE.ENGLISH]: 'You have rejected receipt of the order.',
        [LANGUAGE.THAI]: 'คุณได้ปฏิเสธการรับสินค้าแล้ว'
    },
    'cancel_order_alert': {
        [LANGUAGE.ENGLISH]: 'Your order has been cancelled.',
        [LANGUAGE.THAI]: 'คำสั่งซื้อของคุณถูกยกเลิกแล้ว'
    },
    
    // Status page
    'status_page_title': {
        [LANGUAGE.ENGLISH]: 'Order Status',
        [LANGUAGE.THAI]: 'สถานะคำสั่งซื้อ'
    },
    'change_status': {
        [LANGUAGE.ENGLISH]: 'Change Status',
        [LANGUAGE.THAI]: 'เปลี่ยนสถานะ'
    },
    
    // Status message
    'status_selected': {
        [LANGUAGE.ENGLISH]: 'Status selected. Return to the main page to see changes.',
        [LANGUAGE.THAI]: 'เลือกสถานะแล้ว กลับไปที่หน้าหลักเพื่อดูการเปลี่ยนแปลง'
    },
    
    // Credit/Loan related translations - copied from creditLanguage.js
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

// Function to set language
function setLanguage(lang) {
    if (lang === LANGUAGE.ENGLISH || lang === LANGUAGE.THAI) {
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);  // 使用 'language' 作为键名
        updatePageLanguage();
        return true;
    }
    return false;
}

// Function to get current language
function getCurrentLanguage() {
    // 从 localStorage 获取当前语言设置
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === LANGUAGE.ENGLISH || savedLanguage === LANGUAGE.THAI)) {
        currentLanguage = savedLanguage;
    }
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
    
    // Also update elements with data-credit-lang attribute (for homepage.html)
    const creditElements = document.querySelectorAll('[data-credit-lang]');
    creditElements.forEach(element => {
        const key = element.getAttribute('data-credit-lang');
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

// Toggle language function
function toggleLanguage() {
    const newLang = currentLanguage === LANGUAGE.ENGLISH ? LANGUAGE.THAI : LANGUAGE.ENGLISH;
    setLanguage(newLang);
}

// Function to handle page transition (moved from ruammitrScript.js)
function navigateWithTransition(url) {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);

    // Navigate after animation
    setTimeout(() => {
        window.location.href = url;
    }, 300); // Match this with the CSS animation duration
}

// Add MutationObserver to handle dynamically added elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            updatePageLanguage();
        }
    });
});

// Start observing the document with the configured parameters
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    
    // Start observing after DOM is loaded
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}); 