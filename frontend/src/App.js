import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CartContext from './context/CartContext';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

import './App.css';

// Lazy-loaded components
const LoginForm = lazy(() => import('./components/LoginForm'));
const SignUp = lazy(() => import('./components/SignUp'));
const Home = lazy(() => import('./components/Home'));
const Products = lazy(() => import('./components/Products'));
const ProductItemDetails = lazy(() => import('./components/ProductItemDetails'));
const AdminAddProduct = lazy(() => import('./components/AdminAddProduct'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

// Lazy-load the service-related components
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const ShoppingInfo = lazy(() => import('./components/ShoppingInfo/ShoppingInfo'));

const ReturnsExchanges = lazy(() => import('./components/ReturnsExchanges/ReturnsExchanges'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./components/TermsConditions/TermsConditions '));

const App = () => {
  const [cartList, setCartList] = useState([]);
  const [IsAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      const token = Cookies.get('jwt_token');
      
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          console.error(`Error fetching user role: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, [navigate]);

  const removeAllCartItems = () => setCartList([]);

  const incrementCartItemQuantity = (id) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItemQuantity = (id) => {
    setCartList((prevCartList) => {
      const product = prevCartList.find((item) => item.id === id);
      if (product && product.quantity > 1) {
        return prevCartList.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCartList.filter((item) => item.id !== id);
      }
    });
  };

  const removeCartItem = (id) => {
    setCartList((prevCartList) => prevCartList.filter((item) => item.id !== id));
  };

  const addCartItem = (product) => {
    setCartList((prevCartList) => {
      const existingProduct = prevCartList.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCartList.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevCartList, product];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        IsAuthenticated,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <ErrorBoundary>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            
            {/* Lazy-loaded service pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shopping-info" element={<ShoppingInfo />} />
            <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            
           

            <Route path="/admin" element={<ProtectedRoute><AdminAddProduct /></ProtectedRoute>} />
            <Route path="/products/:id" element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/check-out" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </CartContext.Provider>
  );
};

export default App;
