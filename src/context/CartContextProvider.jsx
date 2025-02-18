import React, {useState} from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const findProduct = cartItems.find(item => item.id === product.id);
    if (findProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = product => {
    const findProduct = cartItems.find(item => item.id === product.id);
    if (findProduct.quantity > 1) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      );
    } else {
      setCartItems(cartItems.filter(item => item.id != product.id));
    }
  };

  const deleteFromCart = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const TotalAmount = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        TotalAmount,
        getTotalCartItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
