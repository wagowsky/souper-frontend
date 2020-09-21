import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../redux/actions/';
import { Link } from 'react-router-dom';

const Cart = (props) => {


  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart)
  const id = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty));
    }
  }, []);

  return (
    <div className='cart'>
      <div className='cartList'>
        <ul className='cartItem'>
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cart.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cart.map((item) => (
              <li key={item.productID}>
                <div className='cartImage'>
                  <img src={item.productImage} key={item.productImage} alt='product' />
                 
                </div>
                <div className='cartName'>
                  <div>
                    <Link to={`/product/${item.productID}`}>{item.productName}</Link>
                  </div>
                  <div>
                    Qty:
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCartAction(item.productID, e.target.value))
                      }
                    >
                      {[...Array(item.stock).keys()].map((stock) => (
                        <option key={stock + 1} value={stock + 1}>
                          {stock + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type='button'
                      className='button'
                      onClick={(e) => {
                        dispatch(removeFromCartAction(item.productID));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className='cartPrice'>${item.productPrice}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className='cartControl'>
        <h3>
          Subtotal ( {cart.reduce((a, c) => a + c.qty, 0)} items) : ${cart.reduce((a, c) => a + c.productPrice * c.qty, 0)}
        </h3>
        <button
          onClick={()=>props.history.push("/signin?redirect=shipping")}
          className='button'
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
