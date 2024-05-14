import React from 'react';

const Product = ({ item, onClick }) => {
  const { title, description, thumbnail } = item;

  return (
    <div className='content'>
      <div class='mb-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img src={thumbnail} alt='' />
        </a>
        <div class='p-5'>
          <a href='#'>
            <h1 className='title'>{title}</h1>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              <p>{description}</p>
            </h5>
          </a>
          <a
            href='#'
            class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <button onClick={() => onClick(item)}>Add to cart</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
