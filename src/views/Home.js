import React, {useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { productListAction } from '../redux/actions';
import { Link } from 'react-router-dom';


const Home = (props) => {

const dispatch=useDispatch()

  const productList = useSelector((state) => state.productListReducer);
  const {loading,error,products}=productList


  useEffect(() => {
             dispatch(productListAction ());
             return () => {};
  }, []);

  return (loading? <div>Loading...</div>:error?<div>error</div>:
  <ul className='products'>
  {products.map((product) => (
    <li key={product.name}>
      <div className='product'>
        <Link to={`/products/${product._id}`}>
          <img
            className='productImage'
            src={product.image}
            alt={product.image}
          />
        </Link>

        <div className='productName'>
        <Link to={`/products/${product._id}`}>{product.name}</Link>
        </div>

        <div className='productBrand'>{product.brand}</div>
        <div className='productPrice'>{product.price}</div>
      </div>
    </li>
  ))}
</ul>
)
};

export default Home;
