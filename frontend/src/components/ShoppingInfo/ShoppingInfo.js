import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const ShoppingInfo = () => {
  const shoppingInfoStyles = {
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
    shippingDetails: {
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
    <div style={shoppingInfoStyles.container}>
      <h1 style={shoppingInfoStyles.heading}>Shipping Information</h1>
      <p style={shoppingInfoStyles.paragraph}>
        We strive to deliver your orders as quickly and efficiently as possible. Here's what you need to know about our shipping process:
      </p>
      <div style={shoppingInfoStyles.shippingDetails}>
        <h3 style={shoppingInfoStyles.subHeading}>Shipping Options</h3>
        <ul style={shoppingInfoStyles.list}>
          <li style={shoppingInfoStyles.listItem}><strong>Standard Shipping:</strong> 5-7 business days</li>
          <li style={shoppingInfoStyles.listItem}><strong>Express Shipping:</strong> 2-3 business days</li>
        </ul>

        <h3 style={shoppingInfoStyles.subHeading}>Shipping Costs</h3>
        <p style={shoppingInfoStyles.paragraph}>
          Shipping costs are calculated at checkout based on your location and the shipping method selected.
        </p>

        <h3 style={shoppingInfoStyles.subHeading}>Tracking Your Order</h3>
        <p style={shoppingInfoStyles.paragraph}>
          Once your order is shipped, you will receive a tracking number to monitor its progress.
        </p>

        <p style={shoppingInfoStyles.note}>
          *Delivery times are estimates and may vary depending on your location and other factors.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShoppingInfo;
