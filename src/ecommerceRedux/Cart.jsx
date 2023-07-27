import React from "react";
import { addToCart, deleteFromCart } from "./slices/ecommerceSlice";
import { useSelector, useDispatch } from "react-redux/";

function Cart() {
  const dispatch = useDispatch();
  const stateVars = useSelector((state) => {
    return state.ecom;
  });
  //   console.log(stateVars.cart);

  function handleDeleteFromCart(e, product){
    e.preventDefault()
    dispatch(deleteFromCart(product))
  }
  return (
    <>
      <h3>Your Cart</h3>
      <div className="cart-items">
        {stateVars.cart.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="left">
                <img src={item.image} alt="cart item" />
              </div>
              <div className="right">
                <h4>{item.title}</h4>
                <a href="" onClick={(e) => handleDeleteFromCart(e, item)}>Delete</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
