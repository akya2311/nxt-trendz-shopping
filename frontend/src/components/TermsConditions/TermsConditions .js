import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const TermsConditions = () => {
  const termsConditionsStyles = {
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
      marginBottom: '20px',
      color: '#5D3FD3',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#555',
    },
    termsDetails: {
      maxWidth: '800px',
      width: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    subHeading: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
      borderBottom: '2px solid #5D3FD3',
      paddingBottom: '5px',
    },
    list: {
      marginBottom: '20px',
      lineHeight: '1.8',
    },
    listItem: {
      fontSize: '1rem',
      color: '#555',
    },
    note: {
      fontSize: '1rem',
      color: '#777',
      fontStyle: 'italic',
    },
  };

  return (
    <>
     <Header/>
    <div style={termsConditionsStyles.container}>
      <h1 style={termsConditionsStyles.heading}>Terms & Conditions</h1>
      <p style={termsConditionsStyles.paragraph}>
        By using our website and services, you agree to the following terms and conditions:
      </p>
      <div style={termsConditionsStyles.termsDetails}>
        <h3 style={termsConditionsStyles.subHeading}>Order Acceptance</h3>
        <p style={termsConditionsStyles.paragraph}>
          Your order is subject to acceptance based on product availability and payment verification.
        </p>

        <h3 style={termsConditionsStyles.subHeading}>Pricing</h3>
        <p style={termsConditionsStyles.paragraph}>
          All prices are listed in USD and are subject to change without notice.
        </p>

        <h3 style={termsConditionsStyles.subHeading}>Limitation of Liability</h3>
        <p style={termsConditionsStyles.paragraph}>
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>

        <p style={termsConditionsStyles.note}>
          *By agreeing to these terms, you acknowledge and accept the above conditions.
        </p>
      </div>
    </div>
     <Footer/>
     </>
  );
};

export default TermsConditions;
