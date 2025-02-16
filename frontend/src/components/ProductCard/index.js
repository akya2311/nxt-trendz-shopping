import { Link } from 'react-router-dom';
import React, { memo } from 'react'; // Import React.memo
import './index.css';

const ProductCard = memo(({ productData }) => {
  const { title, brand, imageUrl, rating, price, id } = productData;

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img
          src={imageUrl}
          alt={title}
          className="thumbnail"
          loading="lazy" // Lazy load images
        />
        <h2 className="title">{title}</h2>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  );
});

export default ProductCard;
