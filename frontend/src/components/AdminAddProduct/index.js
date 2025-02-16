import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Cookies from 'js-cookie'; 
const AdminAddProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title: '',
    brand: '',
    price: '',
    image_url: '',
    rating: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`, options);

      if (response.ok) {
        alert('Product added successfully');
        setProductData({
          title: '',
          brand: '',
          price: '',
          image_url: '',
          rating: '',
          category: '',
          description: '',
        }); // Reset the form after successful submission
        navigate('/admin'); // Redirect to the admin products page
      } else {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        alert(`Error adding product: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      // Handle errors from the fetch operation
      console.error('Network error:', error);
      alert('A network error occurred. Please try again later.');
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      display: 'block',
      margin: '0 auto 20px',
      width: '150px',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#555',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ddd',
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ddd',
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      resize: 'vertical',
      minHeight: '100px',
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',
    },
    responsive: {
      '@media (max-width: 768px)': {
        container: {
          padding: '20px 10px',
        },
        heading: {
          fontSize: '1.75rem',
        },
        input: {
          fontSize: '0.95rem',
        },
        textarea: {
          fontSize: '0.95rem',
        },
        submitButton: {
          fontSize: '0.95rem',
        },
      },
    },
  };

  return (
    <>
    
    <Header/>
    <div style={styles.container}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        style={styles.logo}
        alt="website logo"
      />
      <h1 style={styles.heading}>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {['title', 'brand', 'price', 'image_url', 'rating', 'category'].map((field) => (
          <div style={styles.formGroup} key={field}>
            <label htmlFor={field} style={styles.label}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'price' || field === 'rating' ? 'number' : 'text'}
              id={field}
              name={field}
              placeholder={`Enter product ${field}`}
              value={productData[field]}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
        ))}
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            value={productData.description}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.submitButton}>
          Add Product
        </button>
      </form>
    </div>
    </>
  );
};

export default AdminAddProduct;