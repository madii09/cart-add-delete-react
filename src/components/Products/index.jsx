import React, { useEffect, useState } from 'react';
import Product from '../Product';

const Products = ({ onSelectedProduct }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };
    getApi();
  }, []);

  return (
    <div>
      <h1>product</h1>
      {loading && 'loading...'}
      {!loading &&
        products.length &&
        products.map((item) => (
          <Product key={item.id} item={item} onClick={onSelectedProduct} />
        ))}
    </div>
  );
};

export default Products;
