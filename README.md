"# React E-Commerce Project

A modern e-commerce application built with React, Redux Toolkit, and Vite.

## Features

- Product browsing and shopping cart functionality
- Redux state management for cart and authentication
- Responsive design
- Client-side routing with React Router

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LESLY16/react-project-ecommerce-2.git
cd react-project-ecommerce-2
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`.

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── CartItem.jsx
│   └── Navbar.jsx
├── pages/          # Page components
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── ProductsPage.jsx
├── store/          # Redux store configuration
│   ├── slices/
│   │   ├── authSlice.js
│   │   └── cartSlice.js
│   └── store.js
├── App.jsx         # Main App component
├── main.jsx        # Application entry point
└── index.css       # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build" 
