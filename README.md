# React E-Commerce Store

A full-featured, modern e-commerce web application built with React, Redux Toolkit, and React Router. This project demonstrates best practices in React development, state management, and responsive design.

![Homepage](https://github.com/user-attachments/assets/27401484-8059-45ee-a8e2-1fab278c8b69)

## 🚀 Features

### Core Functionality
- **Product Catalog** - Browse products with search and category filtering
- **Shopping Cart** - Add/remove items with quantity controls and localStorage persistence
- **User Authentication** - Mock login/register system with protected routes
- **Product Reviews** - View customer reviews on product detail pages
- **Admin Dashboard** - Manage products with add/edit capabilities
- **Checkout Flow** - Complete order placement with shipping information

### Technical Features
- **Redux Toolkit** - Centralized state management with 4 slices
- **React Router v6** - Client-side routing with protected routes
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **localStorage Persistence** - Cart and auth data persist across sessions
- **Error Handling** - Comprehensive error states and user feedback
- **Loading States** - Smooth UX with loading indicators

## 📸 Screenshots

### Login Page
![Login](https://github.com/user-attachments/assets/c1bbacff-7604-4c59-87c6-19962a2d6272)

### Shopping Cart
![Cart](https://github.com/user-attachments/assets/abd5cf34-76ea-4890-a8d5-a6ddc48f8bb5)

### Admin Dashboard
![Admin](https://github.com/user-attachments/assets/b8d13e0d-828d-437e-9ba5-02915f572d7f)

### Register Page
![Register](https://github.com/user-attachments/assets/b8f1a72a-0b4e-4f1c-8076-e87d4ad041ff)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router v6** - Routing
- **JSONPlaceholder API** - Mock backend data
- **CSS3** - Styling with custom properties
- **Create React App** - Build tooling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/LESLY16/react-project-ecommerce-2.git

# Navigate to project directory
cd react-project-ecommerce-2

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── store/
│   ├── store.js                # Redux store configuration
│   └── slices/
│       ├── productsSlice.js    # Products state management
│       ├── cartSlice.js        # Shopping cart state
│       ├── authSlice.js        # Authentication state
│       └── reviewsSlice.js     # Product reviews state
├── components/
│   ├── Navbar.js               # Navigation bar
│   ├── ProductCard.js          # Product display card
│   ├── CartItem.js             # Cart item component
│   ├── ReviewList.js           # Reviews display
│   ├── ProtectedRoute.js       # Route protection HOC
│   └── Footer.js               # Footer component
├── pages/
│   ├── HomePage.js             # Landing page
│   ├── ProductsPage.js         # Product catalog
│   ├── ProductDetailPage.js    # Product details
│   ├── CartPage.js             # Shopping cart
│   ├── CheckoutPage.js         # Checkout flow
│   ├── LoginPage.js            # Login form
│   ├── RegisterPage.js         # Registration form
│   └── AdminPage.js            # Admin dashboard
├── App.js                      # Main app component
└── index.js                    # App entry point
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Creates an optimized production build in the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🔐 Authentication

The app uses a mock authentication system. You can log in with any email and password:

- **Email**: user@test.com
- **Password**: password123

Or create a new account through the registration page.

## 🛒 Features Overview

### Products Management
- Fetches products from JSONPlaceholder API
- Maps posts to products with generated prices
- Category-based organization
- Search functionality
- Responsive grid layout

### Shopping Cart
- Add/remove products
- Update quantities
- Calculate subtotal, tax, and total
- Persist cart data in localStorage
- Empty cart state handling

### Checkout Process
1. Add items to cart
2. Review cart contents
3. Login/Register (if not authenticated)
4. Fill shipping information
5. Place order

### Admin Features
- View all products in table format
- Add new products
- Edit existing products
- View statistics (total products, categories)

## 🎨 Design System

### Color Palette
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#1e40af` (Dark Blue)
- **Accent**: `#f59e0b` (Amber)
- **Text Primary**: `#1f2937` (Dark Gray)
- **Text Secondary**: `#6b7280` (Gray)
- **Background**: `#f3f4f6` (Light Gray)

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- Responsive sizing with rem units
- Consistent spacing scale

## 📱 Responsive Design

The application is fully responsive and tested on:
- 📱 Mobile devices (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktops (1024px+)

## 🔄 State Management

### Redux Slices

#### Products Slice
- `fetchProducts` - Fetch all products
- `fetchProductById` - Fetch single product
- `createProduct` - Add new product
- `updateProduct` - Edit existing product
- Search and category filtering

#### Cart Slice
- `addToCart` - Add product to cart
- `removeFromCart` - Remove product
- `updateQuantity` - Update item quantity
- `clearCart` - Empty the cart
- localStorage synchronization

#### Auth Slice
- `login` - User login
- `register` - User registration
- `logout` - User logout
- localStorage persistence

#### Reviews Slice
- `fetchReviews` - Get product reviews
- Loading and error states

## 🌐 API Integration

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for mock data:

- `GET /posts` - Products list
- `GET /posts/:id` - Single product
- `GET /posts/:id/comments` - Product reviews
- `POST /posts` - Create product
- `PUT /posts/:id` - Update product

### Data Mapping
- Posts → Products
- `post.title` → Product name
- `post.body` → Product description
- `post.userId` → Category (1=Electronics, 2=Clothing, etc.)
- Generated price: `((id * 17 + 13) % 200) + 9.99`
- Image: `https://picsum.photos/seed/${id}/400/300`

## 🚦 Routes

| Route | Component | Protected | Description |
|-------|-----------|-----------|-------------|
| `/` | HomePage | No | Landing page |
| `/products` | ProductsPage | No | Product catalog |
| `/products/:id` | ProductDetailPage | No | Product details |
| `/cart` | CartPage | No | Shopping cart |
| `/checkout` | CheckoutPage | Yes | Checkout flow |
| `/login` | LoginPage | No | User login |
| `/register` | RegisterPage | No | User registration |
| `/admin` | AdminPage | Yes | Admin dashboard |

## 🔒 Security

- No security vulnerabilities detected by CodeQL
- Input validation on forms
- Protected routes for authenticated users
- Safe handling of localStorage data

## 🧪 Testing

The application has been manually tested for:
- ✅ All page navigation
- ✅ Authentication flow
- ✅ Cart operations
- ✅ Form validation
- ✅ Responsive design
- ✅ State persistence
- ✅ Error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

LESLY16

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) for the boilerplate
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API
- [Lorem Picsum](https://picsum.photos/) for placeholder images
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [React Router](https://reactrouter.com/) for routing
