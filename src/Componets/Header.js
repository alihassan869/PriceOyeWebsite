
import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Drawer } from 'antd';
import {Search} from "../../src/Redux/action/action"
import useBreakpoint from '../hooks/useBreakpoints';
function Header() {
  const dispatch=useDispatch();
  const { register, handleSubmit } = useForm();
  const [visible, setVisible] = useState(false);
  const curBreakPoint = useBreakpoint();
   // for search empty
   useEffect(() => {
    return () => {
      dispatch(Search(''));
    };
  }, []);
  return (
    <>
    <header>
    <Navbar   className="bg-primary" data-bs-theme="dark" >
      <div className="logo ps-4">
      <img src="https://static.priceoye.pk/images/bar.svg" className='cursor-pointer' alt="not found" srcset=""  onClick={()=>{
        setVisible(true)
      }} />
      </div>
      <Drawer visible={visible} 
      closable={false}
      className="bg-primary"
      title={  <div className="w-100 my-5 " >
        <div className="flex justify-between">
      <img src="https://static.priceoye.pk//icons/po-footer-logo-white.svg" className='img-fluid mb-2  ' alt="not found" srcset=""   />
      <img src="https://static.priceoye.pk/images/not-available.svg" alt="not found" style={{width:'10px',height:'10px'}} className='img-fluid cursor-pointer'  onClick={()=>{
        setVisible(false)
      }} />
      </div>
<div className="title-btn flex flex-col">
  <Link to='/Login'>
      <button className='px-5 py-2 bg-white rounded-md text-blue-600 mt-2 text-base font-bold'>Login</button>
      </Link>
      <Link to="/Register">
      <button className='px-5 py-2 bg-white rounded-md text-blue-600 mt-2 text-base font-bold'>Register</button
      >
      </Link>
      </div>
      <div className="mt-4">
      <Link className='text-white flex  text-decoration-none mb-2 font-serif'>
        <img src="https://static.priceoye.pk/images/user-dashboard/tracker.svg" alt="" className='me-2' />
        Track my Order</Link>
      <Link className='text-white flex text-decoration-none font-serif '>
        <img src="https://static.priceoye.pk/images/user-dashboard/complaint-white.svg" alt="" className='me-2' />
        Launch a Complaint</Link>
      </div>
      </div>}
      placement="left"
      
      >
          <Nav className="ms-auto menu ">
            <Link to='/' className='text-white'>Apple & Samsung Mobiles</Link>
          </Nav>
          
         
      </Drawer>
        <Container>
          <Navbar.Brand href="#home" className='text-white' >
            <img src="https://static.priceoye.pk//icons/po-footer-logo-white.svg" className='img-fluid w-50 ' alt="not found" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Form className='w-100 mt-2'  onSubmit={handleSubmit((data) => {
                  if (data) {
                    // console.log(data)
                    dispatch(Search(data.search));
                  }
                })}>
      <Form.Group className="mb-3 flex " controlId="exampleForm.ControlInput1">
        <Form.Control type="search" placeholder="Search......."  style={{borderTopLeftRadius:"40px",
        borderBottomLeftRadius:'40px'
      }}  {...register('search', { required: true })}
         className='w-75 ps-3'  />
        <button type="submit" className='bg-orange-700 text-white  py-2 px-2 rounded-md  font-bold' style={{borderTopRightRadius:"40px",
        borderBottomRightRadius:'40px'
      }}>Submit</button>
      </Form.Group>
    </Form>
    <div className="">
    {
      curBreakPoint ===  "xl" || curBreakPoint ===  "lg" ? <Link to='/Login'>
      <button className='px-5 py-2 bg-white rounded-md text-blue-600  text-base font-bold'>Login</button>
      </Link> :null
    }
    </div>
    
        
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </header>
    </>
  )
}

export default Header