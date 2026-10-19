# E-Commerce Store

A modern React e-commerce application built with Vite, Redux Toolkit, and React Router. This project includes a shopping cart, login flow, product browsing, and a responsive navigation component.

## Features

- Product listing and browsing
- Add-to-cart functionality
- Cart quantity badge and checkout flow
- User authentication state with Redux
- Responsive layout for desktop and mobile
- Client-side routing with React Router

## Tech Stack

- React 18
- Vite
- Redux Toolkit
- React Router DOM
- JavaScript / JSX
- CSS

## Project Demo

This app simulates a basic online storefront with product browsing and shopping cart interactions.

## Getting Started

### Prerequisites

- Node.js 18+ or newer
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

### Run the app

```bash
npm run dev
```

The app will open in the browser at:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   └── ...
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── LoginPage.jsx
│   └── ...
├── store/
│   ├── slices/
│   │   ├── authSlice.js
│   │   └── cartSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
├── index.css
└── ...
public/
├── vite.svg
└── ...
```

## Notes

- The brand/logo in the header currently uses the default Vite SVG as a placeholder. The visible text label was removed from the header to create a compact logo on smaller screens.
- You can replace `/vite.svg` with your own custom logo image for branding.
- The updated navbar includes an accessible hamburger button and a mobile-friendly slide-down menu.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
