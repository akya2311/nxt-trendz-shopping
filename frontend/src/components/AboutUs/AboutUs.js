import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const AboutUs = () => {
  // Inline CSS styles
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#555',
      marginBottom: '20px',
      textAlign: 'justify',
    },
    strong: {
      color: '#007bff',
      fontWeight: '600',
    },
    responsive: {
      '@media (max-width: 768px)': {
        heading: {
          fontSize: '2rem',
        },
        paragraph: {
          fontSize: '1rem',
        },
      },
      '@media (max-width: 480px)': {
        heading: {
          fontSize: '1.75rem',
        },
        paragraph: {
          fontSize: '0.95rem',
        },
      },
    },
  };

  return (
    <>
    <Header/>
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to <strong style={styles.strong}>Your E-Commerce Store</strong>, your one-stop destination for high-quality products and exceptional customer service. We are passionate about providing you with the best shopping experience, offering a wide range of products to meet your needs.
      </p>
      <p style={styles.paragraph}>
        Our mission is to make online shopping easy, convenient, and enjoyable. We believe in quality, affordability, and sustainability. Our team is dedicated to ensuring that every customer feels valued and satisfied.
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing us. We look forward to serving you!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;