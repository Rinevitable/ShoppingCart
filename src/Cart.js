import React from 'react';
import CartItem from './CartItem';//importing our cart item in cart component

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            //getting from app
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
}

export default Cart;
// products.map((product) will return each element of array => passed in callback