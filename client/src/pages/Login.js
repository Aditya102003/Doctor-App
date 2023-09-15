import React from 'react';
import { Form , Input } from 'antd';
import {Link} from 'react-router-dom';
import Register from './Register';

const Login = () => {

   // form handler
   const onfinishHandler=(values)=>{
    console.log(values);
  }


  return (
    <div className="form-container">
    <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
    
    <h3 className="text-center">Login Form</h3>
    
  
    <Form.Item label= "Email" name="email">
    <input type="email" required/>
    </Form.Item>
    
    <Form.Item label= "Password" name="password">
    <input  type="password" required />
    </Form.Item>
    
    <Link to='/Register' className="m-3">Not a user Register here</Link>
    
    <button className= "btn btn-primary" type="submit">
    Login
    </button>
    
    </Form>
       </div>
  )
}

export default Login