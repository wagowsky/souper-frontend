import React, { useEffect, useState } from 'react';
// import data from "../assets/data"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { productDetailsAction } from '../redux/actions';


const Products = (props) => {
 const [qty,setQty]=useState(1)

const productDetails=useSelector(state=>state.productDetailsReducer)

 const dispatch=useDispatch()
 const {product,loading,error}=productDetails

 useEffect(() => {
  dispatch(productDetailsAction (props.match.params.id));
   return () => {};
}, []);


  return (
    <div>
      <Link to="/">Back to result</Link>

{loading? <div>Loading...</div>:error?<div>error</div>:
   <div className="productDetails">
     <div >
      
       <img className="productDetailsImg" src={product.image} alt={product.name}/>
     </div>
     <div className="productDetailsInfo">
       <ul>
         <li><h4>{product.name}</h4></li>
         <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
         <li>{product.price}</li>
         <div className="productDescription">
           {product.description}
         </div>
       </ul>
       <div className="detailsAction">
         <ul>
           <li>Price:{product.price}</li>
           <li>Status:{product.stock>0? " in Stock":"Out of Stock"}</li>
           <li>Qty: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>{[...Array(product.stock).keys()].map(stock=> 
           <option key={stock+1} value={stock+1}>{stock+1}</option>)}
            
            </select></li>
           <li>{product.stock>0 &&<button onClick={()=>props.history.push(`/cart/${props.match.params.id}?qty=${qty}` )}>Buy</button>}</li>
         </ul>
       </div>
     </div>
   </div>}
    </div>
  );
}

export default Products;
