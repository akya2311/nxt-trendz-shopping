import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const ReturnsExchanges = () => {
  const returnsExchangesStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
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
    policySection: {
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
    <div style={returnsExchangesStyles.container}>
      <h1 style={returnsExchangesStyles.heading}>Returns & Exchanges</h1>
      <p style={returnsExchangesStyles.paragraph}>
        We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer hassle-free returns and exchanges.
      </p>
      <div style={returnsExchangesStyles.policySection}>
        <h3 style={returnsExchangesStyles.subHeading}>Return Policy</h3>
        <ul style={returnsExchangesStyles.list}>
          <li style={returnsExchangesStyles.listItem}>Items must be returned within 30 days of receipt.</li>
          <li style={returnsExchangesStyles.listItem}>Products must be unused and in their original packaging.</li>
          <li style={returnsExchangesStyles.listItem}>Return shipping costs are the responsibility of the customer.</li>
        </ul>
        <h3 style={returnsExchangesStyles.subHeading}>Exchange Policy</h3>
        <ul style={returnsExchangesStyles.list}>
          <li style={returnsExchangesStyles.listItem}>Exchanges are available for defective or incorrect items.</li>
          <li style={returnsExchangesStyles.listItem}>Contact our support team to initiate an exchange.</li>
        </ul>
      </div>
      <p style={returnsExchangesStyles.note}>* Please ensure you follow the guidelines above to ensure a smooth return or exchange process.</p>
    </div>
    <Footer/>
    </>
  );
};

export default ReturnsExchanges;
