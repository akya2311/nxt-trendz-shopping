import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '50px 20px',
      textAlign: 'center',
    },
    footerContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      textAlign: 'left',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: '#f8b400',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
    },
    link: {
      color: '#bbb',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#f8b400',
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      fontSize: '1rem',
    },
    button: {
      padding: '10px',
      backgroundColor: '#f8b400',
      border: 'none',
      color: '#222',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#ffcf40',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      fontSize: '1.5rem',
      justifyContent: 'center',
    },
    iconLink: {
      color: '#bbb',
      transition: 'color 0.3s ease',
    },
    iconHover: {
      color: '#f8b400',
    },
    footerBottom: {
      marginTop: '30px',
      borderTop: '1px solid #444',
      paddingTop: '15px',
      fontSize: '0.9rem',
      color: '#bbb',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Quick Links Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
            <li style={styles.listItem}><Link to="/products" style={styles.link}>Shop</Link></li>
            <li style={styles.listItem}><Link to="/about-us" style={styles.link}>About Us</Link></li>
            <li style={styles.listItem}><Link to="/contact-us" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Customer Support</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/faq" style={styles.link}>FAQ</Link></li>
            <li style={styles.listItem}><Link to="/Shopping-info" style={styles.link}>Shopping Info</Link></li>
            <li style={styles.listItem}><Link to="/returns-exchanges" style={styles.link}>Returns & Exchanges</Link></li>
            <li style={styles.listItem}><Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
            <li style={styles.listItem}><Link to="/terms-conditions" style={styles.link}>Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Subscribe to Our Newsletter</h4>
          <form style={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required style={styles.input} />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
          <p style={{ fontSize: '0.9rem', color: '#bbb' }}>
            Get the latest updates on new products and exclusive offers.
          </p>
        </div>

        {/* Social Media Links Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
