# Mobile E-commerce Checkout Page

A mobile-friendly e-commerce checkout page built with HTML, CSS, and JavaScript.

## Features

- Responsive design optimized for mobile devices
- Order details display
- Product listing with images, prices, and quantities
- Discount/coupon functionality
- Total calculation
- Checkout button
- **Multilingual support**: Toggle between English and Thai languages
- **Multiple order statuses**: Different UI displays based on order status
- **Persistent order status**: Status is saved between browser sessions

## Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The page should display the checkout interface with the default "Shipping" status
4. Click the language toggle button (globe icon) in the header to switch between English and Thai
5. To test different order statuses, navigate to `status.html` in your browser
6. On the status page, click any status option to save your selection
7. Return to the main page to see the updated status display

## Order Status Features

The checkout page includes specific UI elements for different order statuses:

### Return Requested Status

- Status message: "Return requested due to defective product" (Thai: "ขอคืนสินค้าเนื่องจากสินค้าไม่ดี")
- Orange status background
- Two action buttons replace the "Pay now" button:
  - Blue confirmation button: "Confirm Receipt" (Thai: "ยืนยันการรับสินค้า")
  - White button with red border: "Reject Receipt" (Thai: "ปฏิเสธการรับสินค้า")

### Waiting for Store Confirmation Status

- Status message: "Waiting for store to confirm order" (Thai: "รอร้านค้าส่งยืนยันคำสั่งซื้อ")
- Yellow status background
- Single action button:
  - White button with red border: "Cancel Order" (Thai: "ยกเลิกคำสั่งซื้อ")

### Preparing Order Status

- Status message: "Preparing your order" (Thai: "กำลังจัดเตรียมสินค้า")
- Blue status background
- No action buttons displayed

### Shipping Status

- Status message: "Shipping in progress" (Thai: "กำลังจัดส่ง")
- Blue status background
- No action buttons displayed
- This is the default status

## Status Switching Page

The application includes a separate page (`status.html`) that allows:
- Easily switch between different order statuses for testing
- Visual indication of each status with appropriate colors
- After selection, a confirmation message appears without auto-redirecting
- Users must manually navigate back to the index page to see the status change
- Status selection is persisted using localStorage (key: ruammitrDemoOrderStatus)
- Consistent multilingual support across all statuses

## Structure

- `index.html` - The main checkout interface
- `status.html` - The status switching interface
- `styles.css` - All styling for the checkout page
- `script.js` - JavaScript for interactive elements
- `language.js` - Language translation module

## Status Persistence

The application uses localStorage to persist the selected order status:
- Status is stored with the key `ruammitrDemoOrderStatus`
- Status class is stored with the key `ruammitrDemoOrderStatusClass`
- The values persist between browser sessions
- Default status is "Shipping" if no status is found in localStorage

## Language Implementation

The application uses a language module to handle translations:

- English is set as the default language
- All UI text is controlled through a central translation object
- Language can be toggled with a single click
- The application remembers the selected language during the session

## Customization

You can customize this checkout page by:

- Modifying the CSS variables in the `:root` selector in `styles.css` to change colors
- Replacing placeholder images with real product images
- Adding real product data by modifying the HTML structure
- Extending the JavaScript functionality for real e-commerce operations
- Adding more languages by extending the translation object in `language.js`
- Adding new order statuses with different UI presentations

## Browser Compatibility

This page is designed to work with modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

## Language Support

This checkout page supports:
- English (default)
- Thai

Additional languages can be added by extending the translation object in `language.js`. 