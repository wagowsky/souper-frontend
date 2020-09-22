import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerAction } from '../redux/actions/';

function Register(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const userRegister = useSelector(state => state.userRegisterReducer);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();


  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  
  return <div className="form">
    <form onSubmit={(e)=>{e.preventDefault();dispatch(registerAction(email,name,password,passwordRe))}} >
      <ul className="form-container">
        <li>
          <h2>Sign-Up</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Name
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
           <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="passwordRe">Confirm Password</label>
           <input type="password" id="passwordRe" name="passwordRe" onChange={(e) => setPasswordRe(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        
       
      </ul>
    </form>
  </div>
}
export default Register;