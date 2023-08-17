import React from 'react'
import Footer from '../Footer'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { useForm } from 'react-hook-form';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import useBreakpoint from '../../hooks/useBreakpoints';
import {DLTITEM} from '../../Redux/action/action'
function Checkout() {
  const dispatch=useDispatch();
  const histroy=useNavigate();
  const { register, handleSubmit } = useForm();
  const Carts=useSelector((state)=>state.Cartreducer.CARTS)
console.log("Carts2 is:",Carts)
const curBreakPoint = useBreakpoint();
console.log("size is:",curBreakPoint);
  return (
    <>
     <div className="container-fluid">      
          <div className="row">
         {
          curBreakPoint === "sm" || curBreakPoint === "xs" ?
          <Accordion defaultActiveKey={['0']} alwaysOpen className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>ORDER SUMMARY</Accordion.Header>
            <Accordion.Body>
              {Carts.length ? (
                <div
                  className="itemsDetails flex w-full justify-center items-center px-10"
                  style={{ width: '100%', padding: 10 }}
                >
                  <Table className="w-100">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Carts.map((item) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <figure>
                                  <img
                                    src={item.imgdata}
                                    alt="not found"
                                    className="img-fluid h-8 w-8"
                                  />
                                </figure>
                              </td>
                            
                              <td>
                                <p>Name:{item.rname} </p>
                                <p>Price:Rs{item.price}</p>
                                <p>
                                <i
                   className="fas fa-trash cursor-pointer text-white"
                    onClick={()=>dispatch(DLTITEM({id:item.id,colour:item.colour}))}      
                      ></i>
                                      </p>
                              </td>
                              
                            </tr>
                            <p>Flat_Shipping:Rs200</p>
                        <p>Total:Rs{item.price + 200}</p>

                          </>
                        );
                        
                      })}
                     
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="itemsDetails flex w-full justify-center items-center px-10"
                  style={{ width: '100%', padding: 10 }}
                >
                  <p className="font-bold">Your cart is empty</p>
                </div>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> :
        <div className="col-md-3 h-75 mx-auto pt-2 mt-md-5 order-2 bg-black rounded-md" >
 <Table className="w-100 text-white">
 <thead>
       <tr>
           <th>Photo</th>
          <th>Product Name</th>
        </tr>
       </thead>
    <tbody>
        { Carts.length ?
        Carts.map((item) => {
         return (
            <>
              <tr>
                <td>
                  <figure>
                    <img
                      src={item.imgdata}
                      alt="not found"
                      className="img-fluid h-8 w-8"
                    />
                  </figure>
                </td>
              
                <td>
                  <p>Name:{item.rname} </p>
                  <p>Price:Rs{item.price}</p>
                  <i
                   className="fas fa-trash cursor-pointer text-white"
                    onClick={()=>dispatch(DLTITEM({id:item.id,colour:item.colour}))}      
                      ></i>
                </td>
              </tr>

                <p>Flat_Shipping:Rs200</p>
                <p>Total:Rs{item.price + 200}</p>
              
            </>
          );
        
        }):
        <div
        className="itemsDetails flex w-full justify-center items-center px-10"
        style={{ width: '100%', padding: 10 }}
      >
        <p className="font-bold">Your cart is empty</p>
      </div>
        }
       
      </tbody>
    </Table>
    </div>
         }          
<div className="col-md-8 my-5  col-10 mx-auto  mb-3">
<h6 className='text-center text-primary'>Please Enter Your Address Carefully Below </h6>
      <Form
        onSubmit={handleSubmit((User) => {
          if (User) {
            // alert('ok')
            // console.log('data is :',User)
            axios
              .post('http://localhost:250/Order', { User, Carts })
              .then((res) => {
                alert(res.data.message);
                histroy('/');
              });
          }
        })}
      >
        <Form.Select
          aria-label="Default select example"
          className="mb-3"
          {...register('Country', { required: true })}
        >
          <option value="Pakistan">Pakistan</option>
        </Form.Select>
        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a First name...."
              
              {...register('Fname', { required: true })}
              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a Last name...."
              {...register('Lname', { required: true })}
              
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="+92..."
              {...register('Phone', { required: true })}s
             
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Address..."
            {...register('Address', { required: true })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control {...register('City', { required: true })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className="mb-3">
            <Form.Label>State</Form.Label>
            
            <Form.Select
              defaultValue="Choose..."
              {...register('State', { required: true })}
              
            >
              <option>Choose...</option>
              <option>Punjab</option>
              <option>Islamabad</option>
              <option>Kararchi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Postal code"
              {...register('Code', { required: true })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Save for next time"
            {...register('Checkbox', { required: true })}
           
          />
        </Form.Group>

        <button type="submit" className="w-100 py-2 bg-blue-600 text-white rounded-lg">
          Order Now
        </button>
      
      </Form>
</div>

          </div>
       
      </div>
      <Footer/>
    </>
  )
}

export default Checkout
