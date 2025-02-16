import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
const ContactUs = () => {
  const contactUsStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f9',
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
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '30px',
    },
    contactText: {
      fontSize: '1rem',
      color: '#333',
      margin: '5px 0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '600px',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#5D3FD3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#4b2dc4',
    },
  };

  return (
    <>
     <Header/>
    <div style={contactUsStyles.container}>
      <h1 style={contactUsStyles.heading}>Contact Us</h1>
      <p style={contactUsStyles.paragraph}>
        Have questions or need assistance? We're here to help! Reach out to us through any of the following methods:
      </p>
      <div style={contactUsStyles.contactInfo}>
        <p style={contactUsStyles.contactText}><strong>Email:</strong> support@yourecommercestore.com</p>
        <p style={contactUsStyles.contactText}><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p style={contactUsStyles.contactText}><strong>Address:</strong> 123 E-Commerce Street, City, Country</p>
      </div>
      <form style={contactUsStyles.form}>
        <input
          style={contactUsStyles.input}
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          style={contactUsStyles.input}
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          style={contactUsStyles.textarea}
          placeholder="Your Message"
          rows="5"
          required
        />
        <button
          style={contactUsStyles.button}
          type="submit"
          onMouseEnter={(e) => (e.target.style.backgroundColor = contactUsStyles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = contactUsStyles.button.backgroundColor)}
        >
          Send Message
        </button>
      </form>
    </div>
     <Footer/>
     </>

  );
};

export default ContactUs;
