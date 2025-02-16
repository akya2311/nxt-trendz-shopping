import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const FAQ = () => {
  const faqStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      fontFamily: "'Roboto', sans-serif",
      color: '#333',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '30px',
      color: '#5D3FD3',
      fontWeight: 'bold',
    },
    faqList: {
      maxWidth: '800px',
      width: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    faqItem: {
      marginBottom: '20px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '20px',
    },
    faqItemHeading: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    faqItemText: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
    },
    note: {
      fontSize: '0.9rem',
      color: '#777',
      fontStyle: 'italic',
      marginTop: '20px',
    },
  };

  return (
    <>
     <Header/>
    <div style={faqStyles.container}>
      <h1 style={faqStyles.heading}>Frequently Asked Questions</h1>
      <div style={faqStyles.faqList}>
        <div style={faqStyles.faqItem}>
          <h3 style={faqStyles.faqItemHeading}>How do I place an order?</h3>
          <p style={faqStyles.faqItemText}>
            To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the steps to enter your shipping and payment details.
          </p>
        </div>
        <div style={faqStyles.faqItem}>
          <h3 style={faqStyles.faqItemHeading}>What payment methods do you accept?</h3>
          <p style={faqStyles.faqItemText}>
            We accept credit/debit cards, PayPal, and other popular payment methods. All transactions are secure.
          </p>
        </div>
        <div style={faqStyles.faqItem}>
          <h3 style={faqStyles.faqItemHeading}>How can I track my order?</h3>
          <p style={faqStyles.faqItemText}>
            Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the courier's website.
          </p>
        </div>
        <div style={faqStyles.faqItem}>
          <h3 style={faqStyles.faqItemHeading}>Do you offer international shipping?</h3>
          <p style={faqStyles.faqItemText}>
            Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location.
          </p>
        </div>
      </div>
      <p style={faqStyles.note}>* For more inquiries, feel free to contact our support team.</p>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
