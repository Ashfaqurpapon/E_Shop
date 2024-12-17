# E_Shop Application

The **E-Commerce Application** is a comprehensive platform that provides a seamless online shopping experience for users, vendors, and administrators. It includes key features such as product management, cart functionality, secure payments, and role-specific dashboards, ensuring scalability, responsiveness, and security.

# Live Link


The live version of the Car Rental Reservation System can be accessed at: https://car-rental-reseration-system-iepw.vercel.app/

## Table of Contents
- [Overview](#overview)
- [Features and Functionalities](#features-and-functionalities)
  - [Roles and Responsibilities](#roles-and-responsibilities)
  - [Home Page](#home-page)
  - [Product Details Page](#product-details-page)
  - [Shop Page](#shop-page)
  - [Cart Functionality](#cart-functionality)
  - [Checkout](#checkout)
  - [Order History](#order-history)
  - [Vendor Dashboard](#vendor-dashboard)
  - [Recent Products Page](#recent-products-page)
  - [Comparison Feature](#comparison-feature)
- [Technical Requirements](#technical-requirements)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

---

## Overview
This application provides a scalable and high-performance solution for e-commerce platforms. It is built with modern web development technologies like **Node.js**, **Express.js**, **React.js (or Next.js)**, and **PostgreSQL**. The application also integrates with third-party services for payments and file storage, providing enterprise-level features.

---

## Features and Functionalities

### Roles and Responsibilities
#### Admin:
- Full control over the platform.
- Manage users (vendors/customers) with suspension or deletion capabilities.
- Dynamically add, edit, or delete product categories.
- Blacklist vendor shops.
- Monitor transactions and user activities.

#### Vendor:
- Create and manage a shop (name, logo, description).
- Add products with attributes (name, price, category, inventory, discounts, and images).
- Duplicate and edit existing products.
- View and manage product inventory.
- View order history and customer reviews.

#### User (Customer):
- Browse products with advanced filtering and searching.
- Add products to the cart (single vendor at a time).
- Compare up to three products.
- Purchase products using secure payments and coupon codes.
- Leave reviews and ratings for purchased products.
- View order history and follow specific vendor shops.
- Access "Recent Products" for the last 10 viewed items.

---

### Home Page
- Display all products with infinite scrolling.
- Filtering and searching (price range, category, keyword).
- Prioritize products from followed shops (logged-in users).
- Scroll-to-top button for smooth navigation.
- Display categories and flash sale sections with redirections.

### Product Details Page
- Product name, price, images, descriptions, and shop details.
- Related products section (same category).
- Display customer reviews and ratings.

### Shop Page
- Vendor shop details (name, logo, description).
- Product list specific to the vendor.
- Options to **follow/unfollow** shops.

### Cart Functionality
- Add products from a single vendor.
- Show warnings when attempting to add products from multiple vendors:
  - Replace the cart.
  - Retain the current cart.
- Display product details, pricing, and total cost.

### Checkout
- Apply coupon codes for discounts.
- Secure payment integration via **Aamarpay** or **Stripe**.

### Order History
- **Vendors:** View orders placed for their shop.
- **Customers:** View detailed purchase history.

### Vendor Dashboard
- Manage shop information (name, logo).
- Add, edit, delete, or duplicate products.
- Paginated order and product lists.
- Respond to customer reviews.

### Recent Products Page
- Display the last 10 viewed products with prices and direct links.

### Comparison Feature
- Compare up to 3 products from the same category based on attributes (price, ratings, etc.).
- Warn users if products belong to different categories.

---

## Technical Requirements
- **Paginated APIs** for large datasets:
  - Order history for vendors and customers.
  - Product listings on the home page and shop page.
- Filtering and searching functionality should work seamlessly with pagination.
- **Responsive Design:**
  - Optimized for mobile and desktop devices.
- **Secure Authentication:**
  - JWT for login.
  - Reset password via email.

---

## Technology Stack
| Layer              | Technology             |
|--------------------|------------------------|
| **Frontend**       | React.js / Next.js     |
| **Backend**        | Node.js, Express.js    |
| **Database**       | PostgreSQL             |
| **Authentication** | JWT                   |
| **Payment**        | Stripe / Aamarpay      |
| **File Storage**   | Third-party services   |

---

## Setup and Installation
### Prerequisites
- **Node.js** (v16 or higher)
- **PostgreSQL** installed and running
- **Stripe/Aamarpay credentials** (for payments)

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-link
   cd e-commerce-application
   ```
2. Install dependencies for backend and frontend:
   ```bash
   npm install
   cd client && npm install
   ```
3. Configure environment variables:
   - Create a `.env` file for backend and add:
     ```env
     PORT=8000
     DB_URL=your_postgresql_connection_url
     JWT_SECRET=your_jwt_secret
     STRIPE_KEY=your_stripe_key
     ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
5. Start the frontend application:
   ```bash
   cd client
   npm start
   ```
6. Access the app at `http://localhost:3000`.

---

## API Endpoints
| Endpoint                  | Method | Description                       |
|---------------------------|--------|-----------------------------------|
| `/api/products`           | GET    | Get all products                  |
| `/api/productCategory`    | GET    | Get all product categories        |
| `/api/cart`               | POST   | Add product to cart               |
| `/api/orders`             | POST   | Place an order                    |
| `/api/users/login`        | POST   | User login                        |
| `/api/users/signup`       | POST   | User/Vendor registration          |
| `/api/vendors/dashboard`  | GET    | Vendor dashboard data             |

---

## Future Improvements
- **Admin Dashboard:** Detailed analytics and reports.
- **Notifications:** Real-time order and cart updates.
- **Advanced Reviews:** Filter reviews by ratings.
- **Wishlist Feature:** Allow users to save products.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or contributions, please contact:
- **Name:** Your Name
- **Email:** your.email@example.com
- **GitHub:** [Your GitHub Profile](https://github.com/your-profile)
