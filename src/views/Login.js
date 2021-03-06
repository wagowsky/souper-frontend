import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions/';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector(state => state.userLoginReducer);
  const { loading, userInfo, error } = userLogin;
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
    <form onSubmit={(e)=>{e.preventDefault();dispatch(loginAction(email,password))}} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
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
          <label htmlFor="password">Password</label>
           <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Login</button>
        </li>
        
        <li>
          <Link to="/register" className="button secondary text-center" >Create account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default Login;