import React from 'react';

const Cart = ({ cart, setCart }) => {
  const deleteToCart = (id) => {
    const element = cart.filter((item) => item.id !== id);
    setCart(element);
  };
  return (
    <div className='cart'>
      <h1>Cart:</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <>
              <li key={`${item.id}-${Math.random() * 100}`}>{item.title}</li>
              <img src={item.thumbnail} alt='' />
              <button className='btn' onClick={() => deleteToCart(item.id)}>
                Delete
              </button>
            </>
          ))}
        </ul>
      ) : (
        'Cart is empty'
      )}
    </div>
  );
};

export default Cart;
