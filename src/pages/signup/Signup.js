
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useFormik} from 'formik'

import axios from 'axios';
import { useState,useEffect } from 'react';
import {NavLink} from'react-router-dom'
import { signupSchema } from './signupSchema';

function Signup() {
  const [data,setData] = useState("")
  const isValidUser = async ()=>{
    const sdata = [values.name,values.email,values.password]
    console.log("data",sdata)
    const res = await axios.get(`http://localhost:8000/admin/login`,data)
   
    console.log("api response",res)
    console.log("values",values)
    setData(res)
  }
 

  const initialValues = {
    name:"",
    email:"",
    password:""
  }

  const {handleChange,handleBlur,errors,handleSubmit,values,touched}= useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values)=>{
   
      isValidUser()
     }
  })

  return (
    <>
    <Container className="shadow  mb-5 bg-body rounded d-flex" style={{width:"750px",background:"blue",height:"540px"}}>
    
    <Form className='ms-4 '>
     <h3 style={{marginTop:"20px"}}>Sign Up</h3>
     <Form.Group className="mb-2">
        <Form.Label style={{marginTop:"20px",width:"180px"}}>Name</Form.Label>
        <Form.Control type="text" name='name' value={values.name} onChange={handleChange}/>
        {errors.name && touched.name ? (<Form.Text style={{color:"red"}}>
          {errors.name}
        </Form.Text>):null}
       
      </Form.Group>
     <Form.Group className="mb-3">
        <Form.Label style={{marginTop:"15px",width:"180px"}}>Email address</Form.Label>
        <Form.Control type="email" name='email' value={values.email} onChange={handleChange}/>
        {errors.email && touched.email ? (<Form.Text style={{color:"red"}}>
          {errors.email}
        </Form.Text>):null}
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label style={{marginBottom:"20px",width:"300px"}}>Password</Form.Label>
        <Form.Control type="password" name='password' value={values.password} onChange={handleChange}/>
        {errors.password && touched.password ? (<Form.Text style={{color:"red"}}>{errors.password}</Form.Text>):null}
        
      </Form.Group>
      <Form.Group className=''>
      <Form.Text>All ready have an account ?<NavLink to='/login'> login</NavLink></Form.Text>
      </Form.Group>
      <div className='d-grid mt-2'><Button variant="primary" size ="lg"  onClick={handleSubmit}>
        Submit
      </Button></div>
     
    </Form>
    
    <Container style={{marginLeft:"20px", marginTop:"0px",height:"500px"}}>
      <img src='https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?size=338&ext=jpg&uid=R46771382&ga=GA1.2.783827815.1677255751&semt=sph' alt='not found' height={540} width={400}/>
   
    </Container>
    </Container>
    
    
    </>
    
  );
}

export default Signup;