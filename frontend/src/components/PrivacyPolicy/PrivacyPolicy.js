import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const PrivacyPolicy = () => {
  const policyStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      fontFamily: "'Roboto', sans-serif",
      color: '#333',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#5D3FD3',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '1.1rem',
      textAlign: 'center',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    policyDetails: {
      maxWidth: '900px',
      width: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    sectionText: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <>
     <Header/>
    <div style={policyStyles.container}>
      <h1 style={policyStyles.heading}>Privacy Policy</h1>
      <p style={policyStyles.paragraph}>
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>
      <div style={policyStyles.policyDetails}>
        <h3 style={policyStyles.sectionTitle}>Information We Collect</h3>
        <p style={policyStyles.sectionText}>
          We collect information such as your name, email address, shipping address, and payment details when you place an order.
        </p>
        <h3 style={policyStyles.sectionTitle}>How We Use Your Information</h3>
        <p style={policyStyles.sectionText}>
          Your information is used to process orders, improve our services, and communicate with you about your order.
        </p>
        <h3 style={policyStyles.sectionTitle}>Data Security</h3>
        <p style={policyStyles.sectionText}>
          We use industry-standard security measures to protect your data from unauthorized access or disclosure.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
