import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useFormik} from 'formik'
import { loginSchema } from '../../schemas';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {NavLink} from'react-router-dom'

function AdminLogin() {
  const [data,setData] = useState("")
  const isValidUser = async ()=>{
    const sdata = [values.email,values.password]
    console.log("data",sdata)
    const res = await axios.get(`http://localhost:8000/admin/login`,data)
    console.log("api response",res)
    console.log("values",values)
    setData(res)
  }
 

  const initialValues = {
    email:"",
    password:""
  }

  const {handleChange,handleBlur,errors,handleSubmit,values,touched}= useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
   
      isValidUser()
     }
  })

  return (
    <>
    <Container className="shadow  mb-5 bg-body rounded d-flex" style={{width:"750px",background:"blue",height:"440px"}}>
    
    <Form className='ms-4 '>
     <h3 style={{marginTop:"20px"}}>Login</h3>
     <Form.Group className="mb-3">
        <Form.Label style={{marginTop:"20px",width:"180px"}}>Email address</Form.Label>
        <Form.Control type="email" name='email' value={values.email} onChange={handleChange}/>
        {errors.email && touched.email ? (<Form.Text style={{color:"red"}}>
          {errors.email}
        </Form.Text>):null}
       
      </Form.Group>

      <Form.Group  style={{marginBottom:"20px",width:"300px"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={values.password} onChange={handleChange}/>
        {errors.password && touched.password ? (<Form.Text style={{color:"red"}}>{errors.password}</Form.Text>):null}
        
      </Form.Group>
      <Form.Group className=''>
      <Form.Text>Do not have any account ? <NavLink to='/signup'>Sign up</NavLink></Form.Text>
      </Form.Group>
      <div className='d-grid mt-2'><Button variant="primary" size ="lg"  onClick={handleSubmit}>
        Submit
      </Button></div>
     
    </Form>
    
    <Container style={{marginLeft:"20px", marginTop:"0px",height:"400px"}}>
      <img src='https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg?size=626&ext=jpg&uid=R46771382&ga=GA1.1.783827815.1677255751&semt=sph' alt='not found' height={440} width={400}/>
   
    </Container>
    </Container>
    
    
    </>
    
  );
}

export default AdminLogin;