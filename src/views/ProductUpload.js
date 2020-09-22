import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  productUploadAction,
  productListAction,
  productDeleteAction,
} from '../redux/actions';

function ProductUpload(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  console.log(useSelector(state => state.productListReducer.loading))
  const { loading, products, error } = useSelector(state => state.productListReducer);
 console.log(products)

const {
  loading: loadingSave,
  success: successSave,
  error: errorSave,
} = useSelector((state) => state.productUploadReducer);
   

const {
  loading: loadingDelete,
  success: successDelete,
  error: errorDelete,
} = useSelector((state) => state.productDeleteReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
         }
    dispatch(productListAction());
    return () => {
      };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setStock(product.stock);
  };

  return (
    <div className='content content-margined'>
      <div className='product-header'>
        <h3>Products</h3>
        <button className='button primary' onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className='form'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                productUploadAction({
                  _id: id,
                  name,
                  price,
                  image,
                  brand,
                  category,
                  stock,
                  description,
                })
              );
            }}
          >
            <ul className='form-container'>
              <li>
                <h2>Create Product</h2>
              </li>
              <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>

              <li>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='price'>Price</label>
                <input
                  type='text'
                  name='price'
                  value={price}
                  id='price'
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='image'>Image</label>
                <input
                  type='text'
                  name='image'
                  value={image}
                  id='image'
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='brand'>Brand</label>
                <input
                  type='text'
                  name='brand'
                  value={brand}
                  id='brand'
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='stock'>stock</label>
                <input
                  type='text'
                  name='stock'
                  value={stock}
                  id='stock'
                  onChange={(e) => setStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='name'>Category</label>
                <input
                  type='text'
                  name='category'
                  value={category}
                  id='category'
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor='description'>Description</label>
                <textarea
                  name='description'
                  value={description}
                  id='description'
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type='submit' className='button primary'>
                  {id ? 'Update' : 'Create'}
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={() => setModalVisible(false)}
                  className='button secondary'
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className='product-list'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className='button' onClick={() => openModal(product)}>
                    Edit
                  </button>{' '}
                  <button
                    className='button'
                    onClick={(product) => {
                      dispatch( productDeleteAction(product._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductUpload;
