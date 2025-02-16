import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react'; // Suspense for lazy loading
import { Bars } from 'react-loader-spinner';
import Cookies from 'js-cookie';
import './index.css';

const FiltersGroup = lazy(() => import('../FiltersGroup'));
const ProductCard = lazy(() => import('../ProductCard'));
const ProductsHeader = lazy(() => import('../ProductsHeader'));

const categoryOptions = [
  { name: 'Clothing' },
  { name: 'Electronics' },
  { name: 'Appliances' },
  { name: 'Grocery' },
  { name: 'Toys' },
];

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
];

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [activeOptionId, setActiveOptionId] = useState(sortbyOptions[0].optionId);
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const getProducts = useCallback(async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const jwtToken = Cookies.get('jwt_token');
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      setProductsList(updatedData);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  }, [activeOptionId, activeCategoryId, searchInput]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" visible />
    </div>
  );

  const renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  const changeSortby = id => {
    setActiveOptionId(id);
  };

  const renderProductsListView = () => (
    productsList.length > 0 ? (
      <div className="all-products-container">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsHeader
            activeOptionId={activeOptionId}
            sortbyOptions={sortbyOptions}
            changeSortby={changeSortby}
          />
        </Suspense>
        <ul className="products-list">
          {productsList.map(product => (
            <Suspense fallback={<div>Loading...</div>} key={product.id}>
              <ProductCard productData={product} />
            </Suspense>
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
  );

  const renderAllProducts = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductsListView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  const clearFilters = () => {
    setSearchInput('');
    setActiveCategoryId('');
  };

  const changeCategory = categoryName => {
    setActiveCategoryId(categoryName);
  };

  const enterSearchInput = () => {
    getProducts();
  };

  const changeSearchInput = value => {
    setSearchInput(value);
  };

  return (
   
    <div className="all-products-section">
      <Suspense fallback={<div>Loading Filters...</div>}>
        <FiltersGroup
          searchInput={searchInput}
          categoryOptions={categoryOptions}
          changeSearchInput={changeSearchInput}
          enterSearchInput={enterSearchInput}
          activeCategoryId={activeCategoryId}
          changeCategory={changeCategory}
          clearFilters={clearFilters}
        />
      </Suspense>
      {renderAllProducts()}
    
    </div>
    
     
  );
};

export default AllProductsSection;
