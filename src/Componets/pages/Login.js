import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
function Login() {
  const histroy = useNavigate();
  const { register, handleSubmit } = useForm();
  return (
    <>
    <Header/>
      <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
        <h4 className="text-center uppercase text-primary" >Login Here</h4>
        <Form
          onSubmit={handleSubmit((data) => {
            if (data) {
              axios.post('http://localhost:250/Login', data).then((res) => {
                alert(res.data.message);
                // setuserlogin(res.data.user);
                histroy('/');
              });
            }
          })}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: true })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </Form.Group>

          <button type="submit" className="py-2  text-white w-full bg-primary" >
            LOGIN
          </button>
        </Form>
        <div className="flex justify-between">
          <Link to="/Forget" className="text-decoration-none text-primary " >
            Forget Password ?
          </Link>
          <Link to="/Register" className="text-decoration-none text-primary " >
            Create Account
          </Link>
        </div>
      </div> 
      <Footer/>
    </>
  )
}

export default Login
