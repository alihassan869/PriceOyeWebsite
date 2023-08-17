import React from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function Forget() {
  const { register, handleSubmit } = useForm();
  return (
    <>
    <div className="container">
      <div className="text-center">
        <h2>ENTER EMAIL HERE</h2>
      </div>
     <Form
          onSubmit={handleSubmit((data) => {
            // console.log(data)
            if (data) {
              axios.post('http://localhost:250/Forget', data).then((res) => {
                alert(res.data.message);
                // histroy('/Login');
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
          </Form.Group>
          <button type="submit" className="py-2  text-white w-full bg-primary">
            SEND
          </button>
        </Form>
        </div>
    </>
  )
}

export default Forget;